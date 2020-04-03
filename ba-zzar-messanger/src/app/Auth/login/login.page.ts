import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ContactsService } from 'src/app/Contacts/contacts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user;
  constructor(
    private auth: AuthService,
    private router: Router,
    private User: UserService,
    private Cont: ContactsService ) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
       this.auth.login(form)
      .subscribe(res => {
        this.user = res;
        this.UserDisplayToNav(this.user);
        console.log(this.user);
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('myid', res.isAdmin.userId);
          this.FriendRequestChecker();
          this.router.navigate(['/tabs/contacts/']);
        }
      }, (err) => {
        console.log(err);
      });
  }
  //Here we are checking how many friend request we got for tabs Contacts red icon
  FriendRequestChecker() {
    const myid = localStorage.getItem('myid');
    this.Cont.FriendRequestChecker(myid)
   .subscribe(res => {
     var count =  JSON.parse(res).length;
     localStorage.setItem('friendreqcount', count.toString());
     console.log(res);
   }, (err) => {
     console.log(err);
   });
  }

  UserDisplayToNav(user) {
    this.User.ChangeUserData(user);
  }
}
