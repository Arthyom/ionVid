import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrasnNamePipe } from './trasn-name.pipe';
import { UrlpipePipe } from './urlpipe.pipe';
import { IsVideoPipe } from './is-video.pipe';



@NgModule({
  declarations: [ TrasnNamePipe, UrlpipePipe, IsVideoPipe ],
  exports: [ IsVideoPipe, UrlpipePipe, TrasnNamePipe ],
  imports: [
    CommonModule
  ]
})
export class GlobalPipesModule { }
