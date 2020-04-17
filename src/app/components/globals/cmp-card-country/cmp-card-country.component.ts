import { Component, OnInit, Input } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { CmpContryDetailsComponent } from '../cmp-contry-details/cmp-contry-details.component';

@Component({
  selector: 'app-cmp-card-country',
  templateUrl: './cmp-card-country.component.html',
  styleUrls: ['./cmp-card-country.component.scss'],
})
export class CmpCardCountryComponent implements OnInit {

  @Input() dataCountry : any = {};
  cargado = false;

  constructor(
    public commons: CommonsService
  ) { }

  ngOnInit() {
    setTimeout( ()=> {this.cargado = true},  4000);
  }

  ionViewDidEnter(){
    console.log('view en el listado de paises')
  }

  abrirModal( c: any ){
    this.commons.common_Modal_Present( CmpContryDetailsComponent, {'country': c} )
  }

}
