import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cmp-contry-details',
  templateUrl: './cmp-contry-details.component.html',
  styleUrls: ['./cmp-contry-details.component.scss'],
})
export class CmpContryDetailsComponent implements OnInit {

  infoData : any = {};
  infoDataDate: any [] = [];

  constructor(
      public navParams  : NavParams,
    public commons  :  CommonsService
  ) { }

  async ngOnInit() {
    this.infoData = this.navParams.get('country');
    const targetUrl = `${environment.urlMon}latest_stat_by_country.php?country=${this.infoData.country_name}`
    const headersMon = this.commons.commons_Headers_CreateDefault( environment.xHostMon, environment.xKeyMon );
    const resp = await this.commons.commons_Get_AnyDataTipe( targetUrl, headersMon)
    this.infoDataDate = resp.latest_stat_by_country[0]
    console.log('datos sacados', this.infoDataDate)
  }



}
