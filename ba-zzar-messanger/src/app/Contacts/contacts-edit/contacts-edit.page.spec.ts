import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsEditPage } from './contacts-edit.page';

describe('ContactsEditPage', () => {
  let component: ContactsEditPage;
  let fixture: ComponentFixture<ContactsEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
