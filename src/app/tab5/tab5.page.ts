import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(
    public commons: CommonsService
  ) { }

  abrirNavegador( url : string ){
    this.commons.commons_iab_GoTo( url );
  }

  ngOnInit() {
  }

}
