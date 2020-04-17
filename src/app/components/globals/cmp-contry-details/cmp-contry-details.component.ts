import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { NavParams, IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cmp-contry-details',
  templateUrl: './cmp-contry-details.component.html',
  styleUrls: ['./cmp-contry-details.component.scss'],
})
export class CmpContryDetailsComponent implements OnInit {

  @ViewChild( IonSlides, {static:true} ) slidePrincipal: IonSlides;
  infoData : any = {};
  infoDataDate: any [] = [];
  infoContry : any = {};
  regresar = false;
  adelante = true;
  dataHistorial: any;


  constructor(
    public navParams  : NavParams,
    public commons    :  CommonsService
  ) {}

  ionViewDidEnter(){
    this.slidePrincipal.update();
    this.commons.Common_Slides_InitLockSlides( this.slidePrincipal );

    this.commons.common_CurrentSlide.ionSlideNextStart.subscribe( (data)=>{
      this.adelante = false;
      this.regresar = true;

    });

    this.commons.common_CurrentSlide.ionSlidePrevStart.subscribe( (data) => {
      this.adelante = true;
      this.regresar = false;
    });
  }


  async ionViewWillEnter(){

  }

  getPercent( data: string ){
    if( data !== undefined && this.infoDataDate['total_cases'] !== undefined ){
      const percent = (Number( data.replace(',','') ) /Number(this.infoDataDate['total_cases'].replace(',',''))) * 100;
      return percent;
    }
    return '0';
  }

  async ngOnInit() {
    this.infoData = this.navParams.get('country');
    const targetUrl = `${environment.urlMon}latest_stat_by_country.php?country=${this.infoData.country_name}`
    const headersMon = this.commons.commons_Headers_CreateDefault( environment.xHostMon, environment.xKeyMon );
    const resp = await this.commons.commons_Get_AnyDataTipe( targetUrl, headersMon);
    console.log('---ee-e-e', resp)
    this.infoDataDate = resp.latest_stat_by_country[0]

    this.dataHistorial  = await this.commons.commons_Get_AnyDataTipe
              ( environment.urlMon+"cases_by_particular_country.php?country="+this.infoData.country_name  , headersMon );

    const d1 = new Date('2020-04-01');
    const d2 = new Date('2020-04-02');

    this.commons.commons_GroupElements_ByDate(this.dataHistorial.stat_by_country, d1, d2 )

    console.log('data covid historial', this.dataHistorial);


    const respd = await this.commons.commons_Get_AnyDataTipe( environment.urlTrans+this.infoData.country_name, null );
    this.infoContry = respd[0]
    console.log('indo pais', this.infoContry);

  }

  moverAdelante(){
    this.commons.Common_Slides_MoveNext();
  }

  moverAtras(){
    this.commons.Common_Slides_MoveBack();
  }




}
