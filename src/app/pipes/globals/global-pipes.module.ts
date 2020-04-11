import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrasnNamePipe } from './trasn-name.pipe';
import { UrlpipePipe } from './urlpipe.pipe';



@NgModule({
  declarations: [ TrasnNamePipe, UrlpipePipe ],
  exports: [ UrlpipePipe, TrasnNamePipe ],
  imports: [
    CommonModule
  ]
})
export class GlobalPipesModule { }
