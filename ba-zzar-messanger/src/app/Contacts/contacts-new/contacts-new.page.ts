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

  constructor(private comtactservice: ContactsService) {   }

  ngOnInit() {
  }

  SaveT(data: string) {
    this.SearchText = data;
  }

  SearchContact(data: any) {
    this.comtactservice.SearchContact(data.search)
   .subscribe(res => {
     this.SearchRes = res;
     this.items = res;
     console.log(this.SearchRes);
   }, (err) => {
     console.log(err);
   });
  }

  AddRequest(data: any) {
    this.comtactservice.AddRequest(data)
   .subscribe(res => {
     console.log(res);
   }, (err) => {
     console.log(err);
   });
}

}
