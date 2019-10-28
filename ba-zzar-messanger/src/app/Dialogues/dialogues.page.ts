import { Component } from '@angular/core';
import { ContactsService } from '../Contacts/contacts.service';
import { Contact } from '../Models/contact.model';

@Component({
  selector: 'app-dialogues',
  templateUrl: 'dialogues.page.html',
  styleUrls: ['dialogues.page.scss']
})
export class DialoguesPage {
  dialogues: Contact[];
  constructor(private contact: ContactsService) { }



  ionViewWillEnter() {
    this.dialogues = this.contact.getAllContacts();
  }

}
