import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Users } from '../Models/Users';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, tap } from 'rxjs';
import { Users } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.BASE_URL + '/auth/login'

  constructor(private auth: HttpClient) { }

  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  loginUser(data: object): Observable<Users> {
    return this.auth.post<Users>(`${this.API_URL}`, data).pipe(
      tap(userLoggedIn => console.log(`${userLoggedIn}`)),
      catchError(error => of())
    );
  }

}
