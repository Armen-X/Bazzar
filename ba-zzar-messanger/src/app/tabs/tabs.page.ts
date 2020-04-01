import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  crequest = false;
  mdialogue = true;
  friendReqCount;

  constructor() {}

  ionViewDidEnter() {
    this.ReqChecker();
  }

  ReqChecker() {
    this.friendReqCount = localStorage.getItem('friendreqcount');
    if (this.friendReqCount > 0) {
        this.crequest = true;
    } else {
      this.crequest = false;
    }
  }
}
