import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File, Track } from 'src/app/shared/models/types';
import { DataService } from 'src/app/shared/services/data.service';

declare var WaveSurfer: any;

@Component({
    selector: 'app-tambores',
    templateUrl: './tambores.component.html',
    styleUrls: ['./tambores.component.scss'],
    standalone: false
})
export class TamboresComponent implements OnInit, OnDestroy {

  @ViewChildren('iconPlayPause') iconPlayPauseBtns: QueryList<ElementRef>;
  public track: Track;
  public group: string;
  public wavesurfers: any[] = [];
  public iconPlayPauseUrl: string = "assets/icon/play-flat.png";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("TamboresComponent -> ngOnInit -> this.activatedRoute : " + this.activatedRoute);
    this.group = this.activatedRoute.snapshot.params['group'];
    const id : string = this.activatedRoute.snapshot.params['id'] || "billy-jean";
    const type : string = this.activatedRoute.snapshot.params['type'] || "";
    const idTrack : string = type === '' ? `${id}` : `${id}/${type}`;
    this.track = DataService.getRepertoire().find((track: Track) => track.id === idTrack) as Track;
    console.log("TamboresComponent -> ngOnInit -> this.track", this.track);
    const params: any = { detail: this.track.title };
    document.dispatchEvent(new CustomEvent('update-title', params));
    
    // Ajouter l'écouteur d'événement clavier
    document.addEventListener('keydown', this.handleKeyPress.bind(this));
  }

  public ngAfterViewInit(){
    this.track.files.forEach((file: File, index: number) => this.initWaveSurfer(file.file, index)); 
  }

  private initWaveSurfer(file: string, index: number) {
    let wavesurfer = WaveSurfer.create({
      container: `#waveform${index}`,
      waveColor: 'violet',
      progressColor: 'purple',
      height: 60,
      barWidth: 3, 
      // Activer le mode boucle natif de WaveSurfer
      loop: true,
      // Utiliser le backend MediaElement qui gère mieux les boucles
      backend: 'MediaElement'
    });
    wavesurfer.load(`assets/${this.group}/${this.track.folder}/${file}`);
    this.wavesurfers.push(wavesurfer);
  }

  public playSound(index: number): void { 
    let justStop: boolean = this.track.files[index].isPlaying as boolean;
    this.wavesurfers.forEach((wavesurfer: any, index: number) => { 
      wavesurfer.stop(); 
      this.track.files[index].isPlaying = false;
      this.iconPlayPauseBtns.toArray()[index].nativeElement.setAttribute('src', 'assets/icon/play-flat.png');
    })
    if (!justStop) {
      console.log("TamboresComponent -> playSound -> this.wavesurfers[index] :");
      console.dir(this.wavesurfers[index]);
      this.wavesurfers[index].play();
      /* cette méthode crée un blanc à la fin de chaque boucle*/
      //this.wavesurfers[index].on('finish', () => { this.wavesurfers[index].play(0); });
      this.track.files[index].isPlaying = true;
      this.iconPlayPauseBtns.toArray()[index].nativeElement.setAttribute('src', 'assets/icon/pause-flat.png');
      this.enableSmoothLoop(index);
    }
  }

private enableSmoothLoop(index: number) {
  let isRestarting = false;
  this.wavesurfers[index].on('audioprocess', () => {
    if (!this.track.files[index].isPlaying || isRestarting) return;
    const currentTime = this.wavesurfers[index].getCurrentTime();
    const duration = this.wavesurfers[index].getDuration();
    
    // Si on est très proche de la fin, redémarrer avant d'atteindre la fin complète
    if (currentTime >= duration - 0.1) {
      console.log("TamboresComponent -> enableSmoothLoop -> currentTime : " + currentTime);
      console.log("TamboresComponent -> enableSmoothLoop -> duration : " + duration);
      this.wavesurfers[index].play(0);
      setTimeout(() => {
        isRestarting = false;
      }, 100);
    }
  });
}

// Ajouter la méthode pour gérer l'événement clavier
private handleKeyPress(event: KeyboardEvent): void {
  if (event.code === 'Space') {
    // Empêcher le comportement par défaut (scroll)
    event.preventDefault();
    
    // Trouver l'index du fichier en cours de lecture
    const playingIndex = this.track.files.findIndex(file => file.isPlaying);
    if (playingIndex !== -1) {
      this.playSound(playingIndex);
    }
  }
}

// Ajouter la méthode ngOnDestroy pour nettoyer l'écouteur
ngOnDestroy(): void {
  document.removeEventListener('keydown', this.handleKeyPress.bind(this));
}

}
