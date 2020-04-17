import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';
import { environment } from 'src/environments/environment';
import { SplashComponent } from '../components/globals/splash/splash.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  worldStat: any = {};
  constructor(
    public commons: CommonsService
  ) {}

  abrir(){
    this.commons.common_Modal_Present( SplashComponent );
  }

  async ngOnInit(){

    const headersMon = this.commons.commons_Headers_CreateDefault( environment.xHostMon, environment.xKeyMon );
    this.worldStat    = await this.commons.commons_Get_AnyDataTipe
                                    ( environment.urlMon+"worldstat.php", headersMon );

    const headersCov = this.commons.commons_Headers_CreateDefault( environment.xHostCov, environment.xKeyCov );
    const dataCov    = await this.commons.commons_Get_AnyDataTipe
                                    ( environment.urlCov+"countries", headersCov );

    console.log('headers cov', headersCov);
    console.log('headers mon', headersMon);


    console.log('data cov', dataCov);
    console.log('data mon', this.worldStat);


  }


    private newMethod() {

    }
}
