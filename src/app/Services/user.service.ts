import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.BASE_URL + '/users';

  constructor(private http: HttpClient) { }

  createUser(data: object): Observable<ApiResponse<Users>>{
    return this.http.post<ApiResponse<Users>>(`${this.API_URL}`, data).pipe(
      tap(newUser => console.log(`${newUser}`)),
      catchError(error => of())
    );
  }

  getUsers(): Observable<ApiResponse<Users[]>> {
    return this.http.get<ApiResponse<Users>>(this.API_URL).pipe(
      tap((allUsers: any) => console.log(`${allUsers}`)),
      catchError(error => of(<ApiResponse<Users[]>>{}))
    );
  }

  getUserById(id: string): Observable<ApiResponse<Users>> {
    return this.http.get<ApiResponse<Users>>(`${this.API_URL}/${id}`).pipe(
      tap(selectedUser => console.log(`${selectedUser}`)),
      catchError(error => of(<ApiResponse<Users>>{})),
    );
  }


  updateUser(id: string, body: object): Observable<ApiResponse<Users>> {
    return this.http.patch<ApiResponse<Users>>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(<ApiResponse<Users>>{})),
    );
  }

  deleteUser(id: string): Observable<ApiResponse<Users>> {
    return this.http.delete<ApiResponse<Users>>(`${this.API_URL}/${id}`).pipe(
      tap(deletedUser => console.log(`${deletedUser}`)),
      catchError(error => of(<ApiResponse<Users>>{}))
    );
  }

}
