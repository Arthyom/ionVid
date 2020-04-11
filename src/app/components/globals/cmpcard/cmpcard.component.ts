import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmpcard',
  templateUrl: './cmpcard.component.html',
  styleUrls: ['./cmpcard.component.scss'],
})
export class CmpcardComponent implements OnInit {

  @Input() infoEnter = '';
  @Input() titulo = '';
  @Input() colorCifra  = 'dark';
  @Input() colorTitulo  = 'dark';


  constructor() { }

  ngOnInit() {}

}
