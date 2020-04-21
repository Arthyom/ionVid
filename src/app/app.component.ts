import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScraperService } from './services/scraper.service';
import { CommonsService } from './services/commons.service';
import { SplashComponent } from './components/globals/splash/splash.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    public commons: CommonsService,
    public scrpNg: ScraperService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( async(platformType) => {

            this.statusBar.styleDefault();
      let splash = this.commons.common_Modal_Present(SplashComponent);



      if( platformType === 'dom') {

        const dom   = await this.scrpNg.scraper_ng_Get_HTMLResponse("https://www.razon.com.mx/mexico/coronavirus-en-mexico-casos-por-entidad-federativa-y-historico-de-casos-covid-19-muertes-secretaria-de-salud-en-que-fase-de-contingencia-esta-mexico/");
        this.commons.estadosMexico = this.scrpNg.scraper_ng_ParseStrToHTMLTag(dom);

      }
      else{
        const domNative   = await this.scrpNg.scraper_ng_GetNative_HTLMResponse();
        const phaseNative = await this.scrpNg.scraper_ng_GetNative_HTLMResponse('https://coronavirus.gob.mx/');
        const media = await this.scrpNg.scraper_ng_GetNative_HTLMResponse('https://coronavirus.gob.mx/multimedia/');




        const respuesta =   await this.scrpNg.scraper_ng_ParseBySingleTag(media, 'img');

        this.commons.externalMediaLinks.push(...respuesta);

        console.log('elementos ddentro',   this.commons);



        this.commons.estadosMexico = this.scrpNg.scraper_ng_ParseStrToHTMLTag(domNative);
        this.commons.faseCovMX  = this.scrpNg.scraper_ng_ParseBySingleClass(phaseNative,'fase-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-9411');
      }
    });
  }
}
