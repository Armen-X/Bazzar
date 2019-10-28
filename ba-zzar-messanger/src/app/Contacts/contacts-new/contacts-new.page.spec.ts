import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsNewPage } from './contacts-new.page';

describe('ContactsNewPage', () => {
  let component: ContactsNewPage;
  let fixture: ComponentFixture<ContactsNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
