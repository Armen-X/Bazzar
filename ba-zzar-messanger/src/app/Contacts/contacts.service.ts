import { Injectable } from '@angular/core';
import { Contact } from './../Models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  //apiUrl = 'http://armenx-001-site1.atempurl.com/api/contacts/';
    apiUrl = 'http://localhost:44317/api/contacts/';

     //requesturl = 'http://armenx-001-site1.atempurl.com/api/contacts/GetRequestById/';
  requesturl = 'http://localhost:44317/api/contacts/GetRequestById/';

  private friendrequesters: Contact[];

  

  constructor(private http: HttpClient) { }

  SearchContact(searchstring: string) {
    return this.http.get<User[]>(this.apiUrl + 'GetContactsBySearch/' +  searchstring)
      .pipe(
        tap(_ => this.log('Search Contacts')),
        catchError(this.handleError('Search', []))
    );
  }

  AddRequest(ContactId , RquesterId  ) {
    return this.http.post<any[]>(this.apiUrl + 'AddRequest/',
    {
        MyContactId: ContactId,
        RequesterId: RquesterId
    })
      .pipe(
        tap(_ => this.log('Add Request')),
        catchError(this.handleError('Request', []))
    );
  }

  FriendRequestChecker(data: any) {
    return this.http.get<any>(this.requesturl  + data )
      .pipe(
        tap(_ => this.log('friendrequestchecker')),
        catchError(this.handleError('friendrequestchecker', []))
    );
  }
  getAllFrContacts() {
    console.log(this.friendrequesters);
    return [...this.friendrequesters];
  }

  //getAllContacts() {
   // return [...this.contacts];
 // }
 GetContactList(data: any) {
  return this.http.get<any>(this.apiUrl + '/GetContactListById/' + data )
    .pipe(
      tap(_ => this.log('GetContactList')),
      catchError(this.handleError('GetContactList', []))
  );
}
GetContactById(data: any) {
  return this.http.get<any>(this.apiUrl + '/GetContactsById/' + data )
    .pipe(
      tap(_ => this.log('GetContact')),
      catchError(this.handleError('GetContact', []))
  );
}

  AcceptContact( MyId, FriendId) {
    return this.http.post<any[]>(this.apiUrl + 'AcceptRequest/',
    {
        MyContactId: MyId,
        ContactId: FriendId
    })
      .pipe(
        tap(_ => this.log('Accept Contact')),
        catchError(this.handleError('Accept', []))
    );
  }

  deleteContact(Id: number) {
  //this.contacts = this.contacts.filter(contact => {
   // return contact.Id !== Id;
 // });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}


