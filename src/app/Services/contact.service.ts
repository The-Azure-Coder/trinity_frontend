import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact-us';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  API_URL = environment.BASE_URL + '/contact-us';

  constructor(private http: HttpClient) { }

  createMessage(data: Contact): Observable<ApiResponse<Contact>> {
    return this.http.post<ApiResponse<Contact>>(this.API_URL, data).pipe(
      tap((newMessage: any) => console.log(newMessage)),
      catchError((error) => of())
    );
  }

  getMessages(): Observable<ApiResponse<Contact[]>> {
    return this.http.get<ApiResponse<Contact>>(this.API_URL).pipe(
      tap((allMessages: any) => console.log(`${allMessages}`)),
      catchError((_error) => of(<ApiResponse<Contact[]>>{}))

    );
  }

  getMessageById(id: string): Observable<ApiResponse<Contact>> {
    return this.http.get<ApiResponse<Contact>>(`${this.API_URL}/${id}`).pipe(
      tap((selectedmessage: any) => console.log(`${selectedmessage}`)),
      catchError((error) => of(<ApiResponse<Contact>>{}))
    );
  }

  updatemessage(id: string, body: object): Observable<ApiResponse<Contact>> {
    return this.http.patch<ApiResponse<Contact>>(`${this.API_URL}/${id}`, body)
      .pipe(
        tap((updatedRecord: any) => console.log(`${updatedRecord}`)),
        catchError((error) => of(<ApiResponse<Contact>>{}))

      );
  }

  deleteMessage(id: string): Observable<ApiResponse<Contact>> {
    return this.http.delete<ApiResponse<Contact>>(`${this.API_URL}/${id}`).pipe(
      tap((deletedMessage: any) => console.log(`${deletedMessage}`)),
      catchError((error) => of(<ApiResponse<Contact>>{}))

    );
  }
}
