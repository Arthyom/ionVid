import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-multimedia-slides',
  templateUrl: './cmp-multimedia-slides.component.html',
  styleUrls: ['./cmp-multimedia-slides.component.scss'],
})
export class CmpMultimediaSlidesComponent implements OnInit {


  @Input() urls    : string []  = [];

  options ={
    slidesPerView: 0.7
  }

  constructor() { }

  ngOnInit() {

    console.log('------ liks', this.urls)

  }



}
