import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.page.html',
  styleUrls: ['./video-chat.page.scss'],
})
export class VideoChatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  BackToContacts() {
    this.router.navigateByUrl('/tabs/contacts');
  }

}
