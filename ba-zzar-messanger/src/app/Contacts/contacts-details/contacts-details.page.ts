import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/Models/contact.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.page.html',
  styleUrls: ['./contacts-details.page.scss'],
})
export class ContactsDetailsPage implements OnInit {

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

  deleteContact() {
    this.alertCtrl.create({
      header: 'Removing Contact',
      message: 'Are you sure you want to Remove Your Contact?',
      buttons: [
      {
          text: 'Cancel',
          role: 'cancel'
      },
      {
        text: 'Yes',
        handler: () => {
          this.contactsService.deleteContact(this.loadedContact.Id);
          this.router.navigate(['tabs/contacts']);
        }
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
