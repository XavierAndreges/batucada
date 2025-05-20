import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File, Track } from 'src/app/shared/models/types';
import { DataService } from 'src/app/shared/services/data.service';

declare var WaveSurfer: any;

@Component({
    selector: 'app-batucalub',
    templateUrl: './multipiste.component.html',
    styleUrls: ['./multipiste.component.scss'],
    standalone: false
})

export class MultipisteComponent implements OnInit {
  
  @ViewChildren('instrumentBlock') instrumentBlocks:QueryList<ElementRef>;
  @ViewChildren('instrumentImage') instrumentImages:QueryList<ElementRef>;
  @ViewChildren('muteBtn') muteBtns:QueryList<ElementRef>;
  @ViewChildren('soloBtn') solosBtns:QueryList<ElementRef>;
  @ViewChild('loadingSpinner', { read: ElementRef }) loadingSpinner: ElementRef;
  @ViewChild('iconPlayPause', { read: ElementRef }) iconPlayPause: ElementRef;
  public audios: any[] = [];
  public track: Track;
  public isPlaying: boolean = false;
  public selectedMute: number = -1;
  public selectedSolo: number = -1;
  public iconPlayPauseUrl: string = "assets/icon/play-flat.png";
  public wavesurfer: any;
  public currentTime: number = 0;
  public instrumentHeight: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    const group : string = this.activatedRoute.snapshot.params['group'];
    const song : string = this.activatedRoute.snapshot.params['song'];
    const idTrack : string = `${song}/multipiste`;
    this.track = DataService.getRepertoire().find((track: Track) => track.id === idTrack) as Track;
    const nbFiles: number = this.track.files.length;
    this.instrumentHeight = nbFiles >= 7 ? '25%' : nbFiles >= 5 ? '33,33%' : '50%';
    let imagesToPreload = [
      "./assets/icon/sound_off.png",
      "./assets/icon/solo_off.png",
      "./assets/icon/solo_on.png",
      "assets/icon/pause-flat.png"
    ];
    this.preloadImages(imagesToPreload);
    const params: any = { detail: `${song} : multipiste` };
    document.dispatchEvent(new CustomEvent('update-title', params));
  }

  public ngAfterViewInit(){
    this.track.files.forEach((file: File, index: number) => {
      this.initWaveSurferInstruments(file, index);
    });
    this.initWaveSurfer();    
  }

  private initWaveSurfer() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
      height: 80,
      barWidth: 3
    });
    this.wavesurfer.load(`assets/${this.track.folder}/base.mp3`);
    this.wavesurfer.setMute(true);
    this.wavesurfer.on('seek', (e:any) => {
      this.setCurrentTime(this.wavesurfer.getCurrentTime());
      //this because when seeking in waveform, the progress bar stop
      this.isPlaying = false;
      this.playSound();
    });
    this.wavesurfer.on('ready', () => {
      this.loadingSpinner.nativeElement.style.display = "none";
      this.iconPlayPause.nativeElement.style.display = "block";
    });
    this.wavesurfer.on('finish', () => { this.wavesurfer.play(); });
  }

  private initWaveSurferInstruments(instrument: File, index: number) {
    let wavesurfer = WaveSurfer.create({ container: `#waveform${index}` });
    wavesurfer.load(`assets/${this.track.folder}/${instrument.file}`);
    wavesurfer.on('finish', () => { wavesurfer.play(); });
    this.audios.push(wavesurfer);
    this.instrumentImages.toArray()[index].nativeElement.style.backgroundImage = `url(assets/instruments/${instrument.image})`;
  }

  public muteFile(index: number): void {
    if (this.selectedSolo !== -1) { return; } 
    this.audios[index].setMute(!this.audios[index].getMute());
    this.muteBtns.toArray()[index].nativeElement.setAttribute('isMuted', `${this.audios[index].getMute()}`);
  }

  public soloFile(index: number): void {
    this.audios.forEach((audio: any, idx: number) => {
     if (this.selectedSolo !== index) {
        audio.setMute(idx !== index);
        this.solosBtns.toArray()[idx].nativeElement.setAttribute('isSoloSelected', `${!audio.getMute()}`);
        this.solosBtns.toArray()[idx].nativeElement.setAttribute('isSoloActivated', 'true');
      } else {
        audio.setMute(false);
        this.solosBtns.toArray()[idx].nativeElement.setAttribute('isSoloActivated', 'false');
        this.solosBtns.toArray()[idx].nativeElement.setAttribute('isSoloSelected', 'false');
      }
    })
    this.selectedSolo = this.selectedSolo !== index ? index : -1;
    this.muteBtns.toArray().forEach((element: ElementRef) => {
      element.nativeElement.setAttribute('isSoloActivated', `${this.selectedSolo !== -1}`);
    })
  }

  public playSound(): void { 
    this.audios.forEach((audio: HTMLAudioElement) => { this.isPlaying ? audio.pause(): audio.play(); })
    this.isPlaying ? this.wavesurfer.pause(): this.wavesurfer.play();
    this.iconPlayPauseUrl = this.isPlaying ? "assets/icon/play-flat.png" : "assets/icon/pause-flat.png";
    this.isPlaying = !this.isPlaying;
  }

  public setCurrentTime(currentTime: number) {
    this.audios.forEach((audio: HTMLAudioElement) => { audio.currentTime = currentTime; })
  }

  private preloadImages(urlImages: string[]):void {
    urlImages.forEach((urlImage: string) => {
      let image = new Image();
      image.src = urlImage;
    } )
  }

}
