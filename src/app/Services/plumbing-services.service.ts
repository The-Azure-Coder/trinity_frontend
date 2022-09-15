import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from '../models/service';
import { environment } from '../../environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlumbingServicesService {
  API_URL = environment.BASE_URL + '/services'

  constructor(private http: HttpClient) { }

  createService(data: object): Observable<Services> {
    return this.http.post<Services>(`${this.API_URL}`, data).pipe(
      tap(newService => console.log(`${newService}`)),
      catchError(error => of())
    );
  }

  getServices(): Observable<Services[]> {
    return this.http.get<Services[]>(this.API_URL).pipe(
      tap((allServices: any) => console.log(`${allServices}`)),
      catchError(error => of([])),
    );
  }

  getServicesById(id: string): Observable<Services | any> {
    return this.http.get<Services>(`${this.API_URL}/${id}`).pipe(
      tap(selectedService => console.log(`${selectedService}`)),
      catchError(error => of(new Services())),
    );
  }

  updateService(id: string, body: object): Observable<Services> {
    return this.http.patch<Services>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(new Services())),
    );
  }

  deletedService(id: string): Observable<Services> {
    return this.http.delete<Services>(`${this.API_URL}/${id}`).pipe(
      tap(deletedService => console.log(`${deletedService}`)),
      catchError(error => of())
    );
  }
}
