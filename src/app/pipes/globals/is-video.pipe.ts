import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isVideo'
})
export class IsVideoPipe implements PipeTransform {

  transform(url: string): boolean {
    return  url.includes('youtube') ?  true : false;
  }

}
