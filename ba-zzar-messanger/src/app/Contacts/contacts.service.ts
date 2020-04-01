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
  private contacts: Contact[] = [
    {
      Id: 1,
      UserName: 'Felix',
      FirstName: 'Felix',
      LastName: 'Ohanyan',
      Email: 'Feko@gmail.com',
      ImageUrl: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR215qLb6c53AX4bw1jzCrug',
    },
    {
      Id: 2,
      UserName: 'Chibur',
      FirstName: 'Vahan',
      LastName: 'Sahakyan',
      Email: 'Sava@gmail.com',
      ImageUrl: 'https://scontent-lax3-2.cdninstagram.com/vp/8b395529559e5f9dbab29bf07810dec5/5E27D8C1/t51.2885-15/sh0.08/e35/p750x750/64386743_1187871004732336_3845010825664198559_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=104',
    },
    {
      Id: 3,
      UserName: 'Vladi',
      FirstName: 'Vlad',
      LastName: 'Petrovic',
      Email: 'Vladi@gmail.com',
      ImageUrl: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR2tbgqwQ-SePMY3wIvSI8OA',
    },
    {
      Id: 4,
      UserName: 'Argishto',
      FirstName: 'Argisht',
      LastName: 'N',
      Email: 'Argishti@gmail.com',
      ImageUrl: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRTsV6aT1-zft07UNhPAbo7w',
    },
  ];



  constructor(private http: HttpClient) { }

  SearchContact(searchstring: string) {
    return this.http.get<User[]>(this.apiUrl + 'GetContactsBySearch/' +  searchstring)
      .pipe(
        tap(_ => this.log('Search Contacts')),
        catchError(this.handleError('Search', []))
    );
  }

  AddRequest(RquesterId , ContactId) {
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

  getAllContacts() {
    return [...this.contacts];
  }
  getContact(Id: number) {
    return {
      ...this.contacts.find(contact => {
      return contact.Id === Id;
    })};
  }

  deleteContact(Id: number) {
  this.contacts = this.contacts.filter(contact => {
    return contact.Id !== Id;
  });
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


