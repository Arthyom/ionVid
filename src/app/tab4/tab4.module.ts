import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Tab4Page } from './tab4.page';
import { MdlGlobalModule } from '../components/globals/mdl-global.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MdlGlobalModule,
    IonicModule,
    CommonModule,
    FormsModule,

    RouterModule.forChild([{ path: '', component: Tab4Page }])
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
