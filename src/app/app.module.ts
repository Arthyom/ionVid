import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdlGlobalModule } from './components/globals/mdl-global.module';
import { HttpClientModule } from '@angular/common/http';
import { GlobalPipesModule } from './pipes/globals/global-pipes.module';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { ChartsModule } from 'ng2-charts';

import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module
import { NgCircleProgressModule } from 'ng-circle-progress';





@NgModule({
  declarations: [AppComponent],
  exports: [ NgCircleProgressModule,Ng2OdometerModule, MdlGlobalModule, GlobalPipesModule],
  entryComponents: [],
  imports: [   NgCircleProgressModule.forRoot(),Ng2OdometerModule.forRoot(), ChartsModule, GlobalPipesModule, HttpClientModule , MdlGlobalModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    HTTP,

    InAppBrowser,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
