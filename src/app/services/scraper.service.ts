import { Injectable } from '@angular/core';
import { CommonsService } from './commons.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { HTTP } from '@ionic-native/http/ngx';



@Injectable({
  providedIn: 'root'
})
export class ScraperService {


  constructor(
    private scrpNg  : HttpClient,
    public commons  : CommonsService,
    private httpNtv : HTTP

  ) { }

  scraper_ng_ParseStrToHTMLTag( strSrc: string, tag : string = 'tr' ){
    let cells  = [];

    const domConv = new DOMParser();
    const scrpdDocument = domConv.parseFromString( strSrc, 'text/html' );

    const elements =  scrpdDocument.getElementsByTagName(tag);

    for( let i = 1; i < elements.length ; i ++ ){
      const colection = elements[i].getElementsByTagName('td')
      const states =  { 'e': colection[0].innerText,  't': Number( colection[1].innerText.replace(',','')) }
      cells.push( states );

    }

  cells =  cells.sort( (a,b) => {
      if( a.t > b.t ) return 1;
      if( a.t < b.t ) return -1;
      return 0;
    }).reverse();



    return cells;
  }

  async scraper_ng_GetNative_HTLMResponse( targetURL: string = environment.urlMXStates ){
    const Accept =  'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
    const dom = await this.httpNtv.sendRequest( targetURL, {method:'get', headers:{Accept, 'Content-Type': 'text/html; charset=utf-8'}, responseType:'text'} );
    console.log('............', dom.data);
    return dom.data
  }

  scraper_ng_Get_HTMLResponse( targetURL: string = environment.urlMXStates ){

    const headers = new HttpHeaders ({
      'Content-Type': 'text/html; charset=utf-8',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    });

    return new Promise<string>( (resolve) => {
      this.scrpNg.get( targetURL, {headers, responseType: 'text'} ).subscribe( (data) => {

        if(data)
          resolve(data);

              //      console.log('data conseguida', data);

      })
    });

  }




}
