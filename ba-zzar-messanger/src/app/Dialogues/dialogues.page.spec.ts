import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialoguesPage } from './dialogues.page';

describe('Tab2Page', () => {
  let component: DialoguesPage;
  let fixture: ComponentFixture<DialoguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialoguesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialoguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
