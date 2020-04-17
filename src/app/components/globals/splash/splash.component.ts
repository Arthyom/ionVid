import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(
    public commons : CommonsService,
    private splash: SplashScreen
  ) { }

  ngOnInit() {}

  ionViewDidEnter(){

    console.log('dentro del ion did del splashScreen')
    this.splash.hide();

    setTimeout( ()=>{
      this.commons.common_Modal_Dismiss();
    },4000 );
  }

}
