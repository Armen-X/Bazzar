import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.page.html',
  styleUrls: ['./contacts-new.page.scss'],
})
export class ContactsNewPage implements OnInit {
SearchRes: any;
SearchText: string;
items: any[];
SelectedContact: string;
RequesterId: any = localStorage.getItem('myid');


  constructor(private contactservice: ContactsService) {   }

  ngOnInit() {
  }

  SaveT(data: string) {
    this.SearchText = data;
  }

  SearchContact(data: any) {
    this.contactservice.SearchContact(data.search)
   .subscribe(res => {
     this.SearchRes = res;
     this.items = res;
     console.log(this.SearchRes);
   }, (err) => {
     console.log(err);
   });
  }


    AddRequest(requesterid: any , contactid: any) {
    requesterid =  this.RequesterId;
    contactid = this.SelectedContact;
    console.log(contactid);
    this.contactservice.AddRequest(contactid , requesterid)
   .subscribe(res => {
     console.log(res);
   }, (err) => {
     console.log(err);
   });
  }

  getChecked(ContactId) {
    this.SelectedContact = ContactId;
    console.log(this.SelectedContact);
  }

}
