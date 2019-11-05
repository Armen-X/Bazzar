import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private UserData = new BehaviorSubject<string>('');
  CurrentUser = this.UserData.asObservable();

  constructor() { }

  ChangeUserData(Data: any) {
    this.UserData.next(Data);
  }
}
