import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Services } from '../models/service';
import { environment } from '../../environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';


@Injectable({
  providedIn: 'root'
})
export class PlumbingServicesService {
  API_URL = environment.BASE_URL + '/services'

  constructor(private http: HttpClient) { }

  createService(data: object): Observable<ApiResponse<Services>> {
    return this.http.post<ApiResponse<Services>>(`${this.API_URL}`, data).pipe(
      tap(newService => console.log(`${newService}`)),
      catchError(error => of())
    );
  }

  getServices(): Observable<ApiResponse<Services[]>> {
    return this.http.get<ApiResponse<Services>>(this.API_URL).pipe(
      tap((allServices: any) => console.log(`${allServices}`)),
      catchError(error => of(<ApiResponse<Services[]>>{})),
    );
  }

  getServicesById(id: string): Observable<ApiResponse<Services>>{
    return this.http.get<ApiResponse<Services>>(`${this.API_URL}/${id}`).pipe(
      tap(selectedService => console.log(`${selectedService}`)),
      catchError(error => of(<ApiResponse<Services>>{})),
    );
  }

  updateService(id: string, body: object): Observable<ApiResponse<Services>> {
    return this.http.patch<ApiResponse<Services>>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(<ApiResponse<Services>>{})),
    );
  }

  deletedService(id: string): Observable<ApiResponse<Services>> {
    return this.http.delete<ApiResponse<Services>>(`${this.API_URL}/${id}`).pipe(
      tap(deletedService => console.log(`${deletedService}`)),
      catchError(error => of(<ApiResponse<Services>>{}))
    );
  }
}
