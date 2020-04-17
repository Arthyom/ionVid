import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-cmp-mx-fase',
  templateUrl: './cmp-mx-fase.component.html',
  styleUrls: ['./cmp-mx-fase.component.scss'],
})
export class CmpMxFaseComponent implements OnInit {

  constructor(
    public commons: CommonsService
  ) { }

  ngOnInit() {}

}
