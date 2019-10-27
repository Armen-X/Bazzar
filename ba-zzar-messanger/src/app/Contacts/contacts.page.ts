import { Component, OnInit } from '@angular/core';
import { Contact } from './../Models/contact.model';
import { ContactsService } from './contacts.service';



@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.page.html',
  styleUrls: ['contacts.page.scss']
})
export class ContactsPage implements OnInit {
  contacts: Contact[];
  constructor(private contact: ContactsService) { }


 ngOnInit() {

 }

ionViewWillEnter() {
  this.contacts = this.contact.getAllContacts();
}

}
