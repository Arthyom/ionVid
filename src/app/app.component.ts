import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScraperService } from './services/scraper.service';
import { CommonsService } from './services/commons.service';

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
    this.platform.ready().then( async() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const dom = await this.scrpNg.scraper_ng_Get_HTMLResponse();
      this.commons.estadosMexico = this.scrpNg.scraper_ng_ParseStrToHTMLTag(dom);
    });
  }
}
