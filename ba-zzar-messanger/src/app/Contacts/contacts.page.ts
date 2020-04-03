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
 // contacts: Contact[];
  contacts: any[] = [];
  defaultImg = "https://www.sackettwaconia.com/wp-content/uploads/default-profile.png";
  friendReqCount;
  request = false;
  constructor(private contact: ContactsService, private route: Router ) {}

 ngOnInit() {
  this.GetContactList();
  this.ReqChecker();
 }

 ionViewWillEnter() {
  //this.contacts = this.contact.getAllContacts();
}

GetContactList() {
  const myid = localStorage.getItem('myid');
  this.contact.GetContactList(myid)
 .subscribe(res => {
  this.contacts = JSON.parse(res);
  console.log(this.contacts);
 }, (err) => {
   console.log(err);
 });
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
