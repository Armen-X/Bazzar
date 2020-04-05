import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/contact.model';
import { ContactsService } from '../contacts.service';
import { toArray } from 'rxjs/operators';




@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],

})

export class RequestPage implements OnInit {
  friendrequesters: any[] = [];
  friendId;
  myId;
  defaultImg = "https://www.sackettwaconia.com/wp-content/uploads/default-profile.png";

  constructor(private frcontact: ContactsService, ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.FriendRequestChecker();
    //this.friendrequesters = this.frcontact.getAllFrContacts();
  }

  FriendRequestChecker() {
    const myid = localStorage.getItem('myid');
    this.frcontact.FriendRequestChecker(myid)
   .subscribe(res => {
    this.friendrequesters = JSON.parse(res);
    console.log(this.friendrequesters);
   }, (err) => {
     console.log(err);
   });
  }

  SaveContact(data: any) {
    this.friendId = data;

  }

  AcceptContact(data: any) {
    this.friendId =  data.RequesterId;
    this.myId = data.MyContactId;

    this.frcontact.AcceptContact(this.myId, this.friendId)
   .subscribe(res => {
     console.log(res); this.DeleteRequest();
   }, (err) => {
     console.log(err);
   });
  }

  DeleteRequest() {
    this.frcontact.DeleteRequest(this.friendId)
   .subscribe(res => {
   }, (err) => {
     console.log(err);
   });
  }

}

