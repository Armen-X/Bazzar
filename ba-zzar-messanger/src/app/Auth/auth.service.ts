import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://armenx-001-site1.atempurl.com/api/auth/';
 // apiUrl = 'http://localhost:44317/api/auth/';
 

  constructor( private http: HttpClient, private router: Router) { }


  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register', data)
      .pipe(
        tap(_ => this.log('login')),
        catchError(this.handleError('login', []))
      );
  }
  

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('myid');
    localStorage.removeItem('friendreqcount');
    this.router.navigate(['/login']);
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


