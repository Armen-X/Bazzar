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
  constructor(private contact: ContactsService, private route: Router ) { }


 ngOnInit() {

 }

 ionViewWillEnter() {
  this.contacts = this.contact.getAllContacts();
}

}
