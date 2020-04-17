import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpVidFrameComponent } from './cmp-vid-frame/cmp-vid-frame.component';
import { CmpcardComponent } from './cmpcard/cmpcard.component';
import { IonicModule } from '@ionic/angular';
import { CmpCardCountryComponent } from './cmp-card-country/cmp-card-country.component';
import { GlobalPipesModule } from 'src/app/pipes/globals/global-pipes.module';
import { CmpContryDetailsComponent } from './cmp-contry-details/cmp-contry-details.component';
import { CmpmapmexComponent } from '../globals/cmpmapmex/cmpmapmex.component';
import { CmpclosemodalheaderComponent } from './cmpclosemodalheader/cmpclosemodalheader.component';
import { CmpcountrydetailsComponent } from './cmpcountrydetails/cmpcountrydetails.component';
import { CmpChartLineComponent } from './cmp-chart-line/cmp-chart-line.component';
import { ChartsModule } from 'ng2-charts';

import { Ng2OdometerModule } from 'ng2-odometer'; // <-- import the module
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CmpCadCircleComponent } from './cmp-cad-circle/cmp-cad-circle.component';
import { CmpMxFaseComponent } from './cmp-mx-fase/cmp-mx-fase.component';
import { SplashComponent } from './splash/splash.component';


@NgModule({
  entryComponents:[SplashComponent, CmpCadCircleComponent, CmpcountrydetailsComponent, CmpmapmexComponent, CmpContryDetailsComponent],
  declarations: [ SplashComponent, CmpMxFaseComponent, CmpCadCircleComponent, CmpChartLineComponent, CmpcountrydetailsComponent, CmpclosemodalheaderComponent, CmpmapmexComponent, CmpContryDetailsComponent, CmpCardCountryComponent, CmpcardComponent, CmpVidFrameComponent ],
  exports: [ SplashComponent, CmpMxFaseComponent, CmpCadCircleComponent, CmpChartLineComponent, CmpcountrydetailsComponent, CmpclosemodalheaderComponent,  CmpmapmexComponent, CmpContryDetailsComponent,  CmpCardCountryComponent, CmpVidFrameComponent, CmpcardComponent ],
  imports: [
    NgCircleProgressModule.forRoot(),
    Ng2OdometerModule.forRoot(),
    ChartsModule,
    GlobalPipesModule,
    IonicModule,
    CommonModule
  ]
})
export class MdlGlobalModule { }
