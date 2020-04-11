import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';


@Component({
  selector: 'app-cmp-vid-frame',
  templateUrl: './cmp-vid-frame.component.html',
  styleUrls: ['./cmp-vid-frame.component.scss'],
})
export class CmpVidFrameComponent implements OnInit {

  @ViewChild('iframe', {static:true}) iframe : ElementRef
  @Input() src = 'https://bing.com/covid';

  constructor(
  public  commons: CommonsService
) { }



  ngOnInit() {
  this.iframe.nativeElement.onloadstart = ()=>{
    this.commons.commons_Loading_Present('cargando');
  };

  this.iframe.nativeElement.onloadstart();
  }

  terminado(){
  this.iframe.nativeElement.onloadeddata = ()=>{
    this.commons.commons_Loading_Dismiss();
  };

  this.iframe.nativeElement.onloadeddata();
}

}
