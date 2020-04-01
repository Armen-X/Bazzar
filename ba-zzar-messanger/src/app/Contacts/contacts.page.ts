import { Component, OnInit } from '@angular/core';
import { Contact } from './../Models/contact.model';
import { ContactsService } from './contacts.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.page.html',
  styleUrls: ['contacts.page.scss']
})
export class ContactsPage implements OnInit {
  contacts: Contact[];
  friendReqCount;
  request = false;
  constructor(private contact: ContactsService, private route: Router ) {}

 ngOnInit() {}

 ionViewWillEnter() {
  this.ReqChecker();
  this.contacts = this.contact.getAllContacts();
}
ReqChecker() {
  this.friendReqCount = localStorage.getItem('friendreqcount');
  if (this.friendReqCount > 0) {
      this.request = true;
  } else {
    this.request = false;
  }
}

}
