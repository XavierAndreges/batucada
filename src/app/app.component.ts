import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})

export class AppComponent implements OnInit {

  @ViewChild('title', { read: ElementRef }) title: ElementRef;

  constructor(
    private renderer: Renderer2, 
  ) { }

  ngOnInit() {
    document.addEventListener('update-title', this.updateTitle.bind(this));
  }

  public updateTitle(event: any): void {
    const childElements = this.title.nativeElement.childNodes;
    for (let child of childElements) {
      this.renderer.removeChild(this.title.nativeElement, child);
    }
    let newTitle: string = this.renderer.createText(event.detail);
    this.renderer.appendChild(this.title.nativeElement, newTitle);
  }

}


