import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact-us';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  API_URL = environment.BASE_URL + '/contact-us';

  constructor(private http: HttpClient) { }


  createMessage(data:object):Observable<Contact>{
    return this.http.post<Contact>(`${this.API_URL}`, data).pipe(
      tap( newMessage => console.log(`${newMessage}`)),
      catchError( error => of())
    );
  }

  getMessages(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.API_URL).pipe(
      tap((allMessages: any) => console.log(`${allMessages}`)),
      catchError(error => of([])),
    );
  }

  getMessageById(id: string):Observable<Contact | any>{
    return this.http.get<Contact>(`${this.API_URL}/${id}`).pipe(
      tap(selectedmessage => console.log(`${selectedmessage}`)),
      catchError(error => of(new Contact())),
    );
  }
   
  updatemessage(id: string, body:object): Observable<Contact>{
    return this.http.put<Contact>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(new Contact())),
    );
  }

  deleteMessage(id:string):Observable<Contact>{
    return this.http.delete<Contact>(`${this.API_URL}/${id}`).pipe(
      tap( deletedMessage => console.log(`${deletedMessage}`)),
      catchError( error => of())
    );
  }

}
