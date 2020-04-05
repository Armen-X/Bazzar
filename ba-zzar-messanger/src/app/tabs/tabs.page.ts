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

  constructor() {
    this.friendReqCount = localStorage.getItem('friendreqcount');
  }

  ngOnInit() {
    //this.friendReqCount = localStorage.getItem('friendreqcount');
    this.ReqChecker();
   }
 
  ReqChecker() {
    if (this.friendReqCount > 0) {
        this.crequest = true;
    } else {
      this.crequest = false;
    }
  }
}
