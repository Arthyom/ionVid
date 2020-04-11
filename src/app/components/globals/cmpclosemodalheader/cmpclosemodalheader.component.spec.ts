import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CmpclosemodalheaderComponent } from './cmpclosemodalheader.component';

describe('CmpclosemodalheaderComponent', () => {
  let component: CmpclosemodalheaderComponent;
  let fixture: ComponentFixture<CmpclosemodalheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpclosemodalheaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CmpclosemodalheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
