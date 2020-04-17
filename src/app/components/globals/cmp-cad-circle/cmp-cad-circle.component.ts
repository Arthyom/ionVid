import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-cad-circle',
  templateUrl: './cmp-cad-circle.component.html',
  styleUrls: ['./cmp-cad-circle.component.scss'],
})
export class CmpCadCircleComponent implements OnInit {

@Input() titulo:string;
@Input() poblacion: string;
@Input() total: string;


  constructor() { }

  ngOnInit() {}

}
