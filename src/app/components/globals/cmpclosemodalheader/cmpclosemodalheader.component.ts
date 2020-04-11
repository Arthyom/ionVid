import { Component, OnInit, Input } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-cmpclosemodalheader',
  templateUrl: './cmpclosemodalheader.component.html',
  styleUrls: ['./cmpclosemodalheader.component.scss'],
})
export class CmpclosemodalheaderComponent implements OnInit {

  @Input() titulo = '';
  constructor(
    private commons: CommonsService
  ) { }

  ngOnInit() {}

  closeModal(){
    console.log('cerrando')
    this.commons.common_Modal_Dismiss();
  }

}
