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

  constructor(
    public commons: CommonsService
  ) { }

  ngOnInit() {}

  abrirModal( c: any ){
    this.commons.common_Modal_Present( CmpContryDetailsComponent, {'country': c} )
  }

}
