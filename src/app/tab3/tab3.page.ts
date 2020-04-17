import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  dataCountryCov : any[] = [];
  dataCountryMon : any[] = [];



  constructor(
    public commons : CommonsService
  ) {}

  async ngOnInit(){
    this.commons.commons_Loading_Present( 'Cargando...' );

    const headerMon =  this.commons.commons_Headers_CreateDefault( environment.xHostMon, environment.xKeyMon );
    const headerCov =  this.commons.commons_Headers_CreateDefault( environment.xHostCov, environment.xKeyCov );


    this.dataCountryCov = await this.commons.commons_Get_AnyDataTipe( environment.urlCov+"statistics" , headerCov );
    this.dataCountryMon = await this.commons.commons_Get_AnyDataTipe( environment.urlMon+"cases_by_country.php"  , headerMon );



    console.log('data covid', this.dataCountryCov);

    console.log('data mon', this.dataCountryMon)

  }

}
