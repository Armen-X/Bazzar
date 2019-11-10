import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage implements OnInit {
  appUser;
  constructor(private User: UserService, private auth: AuthService ) {}

  ngOnInit() {
    this.User.CurrentUser.subscribe(User => this.appUser = User);
  }

  Logout() {
    this.auth.logout();
  }
}

