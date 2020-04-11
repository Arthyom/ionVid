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



@NgModule({
  entryComponents:[ CmpcountrydetailsComponent, CmpmapmexComponent, CmpContryDetailsComponent],
  declarations: [CmpcountrydetailsComponent, CmpclosemodalheaderComponent, CmpmapmexComponent, CmpContryDetailsComponent, CmpCardCountryComponent, CmpcardComponent, CmpVidFrameComponent ],
  exports: [CmpcountrydetailsComponent, CmpclosemodalheaderComponent,  CmpmapmexComponent, CmpContryDetailsComponent,  CmpCardCountryComponent, CmpVidFrameComponent, CmpcardComponent ],
  imports: [
    GlobalPipesModule,
    IonicModule,
    CommonModule
  ]
})
export class MdlGlobalModule { }
