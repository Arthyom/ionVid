import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController, PopoverController, NavController, NavParams, LoadingController, IonSlides } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ChartDataSets } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  public estadosMexico : any[] = [];
  public faseCovMX : string;
  public lineDataSetCasosTotales: ChartDataSets [] = [];

  common_CurrentSlide: IonSlides;
  Common_CurrentModal: HTMLIonModalElement;
  global: HTMLIonLoadingElement;

  constructor(
    private modaller  : ModalController,
    private popOver   : PopoverController,
    private http      : HttpClient,
    private load      : LoadingController,
    public nav        : NavController,
    private iab       : InAppBrowser

  ) { }

  commons_GroupElements_ByDate( elementCollection : any[], dateStart: Date, dateEnd: Date ){
    let filteredElements : number [] = [];

    if(elementCollection !== undefined){

      elementCollection.filter( (elemento) => {

        let dateRecord:Date  = new Date( elemento.record_date.slice(0,10) );
        if(  dateRecord > dateStart &&  dateEnd >= dateRecord  ){



        //  console.log('dentro del rago', dateRecord);



        //  this.lineDataSetCasosTotales.push( { label: 'Total', data: [Number( elemento.total_cases.replace(',','') )]} );

        //  console.log('data metida', this.lineDataSetCasosTotales)

          filteredElements.push( Number( elemento.total_cases.replace(',','') ) )
        }


      });

      this.lineDataSetCasosTotales.push( {data: filteredElements, label:'Casos'} );

      //console.log('dates conincidentes', this.lineDataSetCasosTotales);

  }
  }

  Common_Slides_InitLockSlides( slideTarget: IonSlides ) {
    this.common_CurrentSlide = slideTarget;
    this.common_CurrentSlide.lockSwipes(true);
  }


  Common_Slides_MoveNext( slideTarget?: IonSlides ) {
    this.common_CurrentSlide.lockSwipes(false);
    this.common_CurrentSlide.slideNext();
    this.common_CurrentSlide.lockSwipes(true);
  }

  Common_Slides_MoveBack( slideTarget?: IonSlides ) {
    this.common_CurrentSlide.lockSwipes(false);
    this.common_CurrentSlide.slidePrev();
    this.common_CurrentSlide.lockSwipes(true);
  }

  commons_iab_GoTo( targetURL: string ){
    this.iab.create(targetURL);
  }

  async commons_Loading_Present( message: string, backdropDismiss = false, duration = 5000 ){
  this.global = await this.load.create({
    duration,
    message,
    backdropDismiss
  });

  this.global.present();

}

commons_Loading_Dismiss( ){
      this.global.dismiss();
}



  common_Nav_NavigateTo( targetUrl :string ) {
      this.nav.navigateForward(targetUrl);
  }

  common_Nav_NavigateBack() {
      this.nav.back();
  }

  common_Nav_NavigateAsRoot( targetUrl: string ) {
      this.nav.navigateRoot(targetUrl);
  }

  async common_Modal_Present( cmpTarget: any, cmpParams:any = null ) {
    this.Common_CurrentModal  = await this.modaller.create({
      component: cmpTarget,
      componentProps: cmpParams,
      animated: true
    });

    this.Common_CurrentModal.present();
  }

  common_Modal_Dismiss() {
    this.Common_CurrentModal.dismiss()
  }

  commons_Headers_CreateDefault( xHosts: string, xKey: string ){
    return new HttpHeaders({
      "x-rapidapi-host": xHosts,
      "x-rapidapi-key" : xKey
    });
  }


  commons_Get_AnyDataTipe( targetUrl: string, httpHeader: HttpHeaders ){

    return new Promise <any>( (resolve, reject) => {
      this.http.get( targetUrl, {headers: httpHeader} )


       .subscribe(
         (data) => {
           if(data)
            resolve(data);
          else
            reject(null);
          },

          error => { console.log('error atrapado')}
    );
    });
  }

}
