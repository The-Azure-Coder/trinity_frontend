import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/user';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.BASE_URL + '/users';

  constructor( private http:HttpClient) { }

  createUser(data:object):Observable<Users>{
    return this.http.post<Users>(`${this.API_URL}`, data).pipe(
      tap( newUser => console.log(`${newUser}`)),
      catchError( error => of())
    );
  }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.API_URL).pipe(
      tap((allUsers: any) => console.log(`${allUsers}`)),
      catchError(error => of([])),
    );
  }

  getUserById(id: string):Observable<Users | any>{
    return this.http.get<Users>(`${this.API_URL}/${id}`).pipe(
      tap(selectedUser => console.log(`${selectedUser}`)),
      catchError(error => of(new Users())),
    );
  }
   
  updateUser(id: string, body:object): Observable<Users>{
    return this.http.patch<Users>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(new Users())),
    );
  }

  deleteUser(id:string):Observable<Users>{
    return this.http.delete<Users>(`${this.API_URL}/${id}`).pipe(
      tap( deletedUser => console.log(`${deletedUser}`)),
      catchError( error => of())
    );
  }

}
