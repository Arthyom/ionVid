import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlpipe'
})
export class UrlpipePipe implements PipeTransform {

  constructor( private san: DomSanitizer ){}

  transform(value: string): any {
    return this.san.bypassSecurityTrustResourceUrl(value);
  }

}
