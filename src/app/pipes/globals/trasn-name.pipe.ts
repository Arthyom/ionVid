import { Pipe, PipeTransform } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'trasnName'
})
export class TrasnNamePipe implements PipeTransform {

  constructor( public commons: CommonsService ){}

  async transform( nameIng: string, targeIdiom: string = 'es'): Promise< string > {
    const res = await this.translate(nameIng, targeIdiom)
    let trans = res[0].translations.es
    console.log('trans eotniso', trans)
    if( !trans )
      trans = nameIng;

    return trans;
  }

  async translate ( nameIng: string, targetIdiom: string = 'es') {
    const respuesta = await this.commons.commons_Get_AnyDataTipe( environment.urlTrans+nameIng, null );
    return respuesta;
  }

}
