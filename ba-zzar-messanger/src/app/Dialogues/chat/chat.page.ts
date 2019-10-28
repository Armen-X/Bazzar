import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/Models/contact.model';
import { ContactsService } from 'src/app/Contacts/contacts.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  loadedContact: Contact;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('Id')) {
        //redirect user 
        this.router.navigate(['/contacts']);
        return;
      }
      let contactId = paramMap.get('Id');
      this.loadedContact = this.contactsService.getContact(parseInt(contactId));
    });
  }

}
