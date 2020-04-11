import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';
import { CmpmapmexComponent } from '../components/globals/cmpmapmex/cmpmapmex.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( public commons : CommonsService ) { }

  ngOnInit(

  ) {
  }

  verMapa(){
    this.commons.common_Modal_Present( CmpmapmexComponent );
  }

}
