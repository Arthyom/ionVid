import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CmpcountrydetailsComponent } from './cmpcountrydetails.component';

describe('CmpcountrydetailsComponent', () => {
  let component: CmpcountrydetailsComponent;
  let fixture: ComponentFixture<CmpcountrydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpcountrydetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CmpcountrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
