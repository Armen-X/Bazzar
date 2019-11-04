import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
       this.auth.login(form)
      .subscribe(res => {
        this.user = res;
       // this.UserDisplayToNav(this.user); TODO  use this to display username in app
        console.log(this.user);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/tabs/contacts/']);
        }
      }, (err) => {
        console.log(err);
      });
  }
}
