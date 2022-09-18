import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Requests } from '../models/request';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  API_URL = environment.BASE_URL+ '/requests'

  constructor(private http: HttpClient) { }

  createRepair(data: object): Observable<ApiResponse<Requests>> {
    return this.http.post<ApiResponse<Requests>> (`${this.API_URL}`, data).pipe(
      tap(newRequest => console.log(`${newRequest}`)),
      catchError(error => of())
    );
  }

  getRepairs(): Observable<ApiResponse<Requests[]>> {
    return this.http.get<ApiResponse<Requests>>(this.API_URL).pipe(
      tap((allRequests: any) => console.log(`${allRequests}`)),
      catchError(error => of(<ApiResponse<Requests[]>>{})),
    );
  }

  getRepairById(id: string): Observable<ApiResponse<Requests>> {
    return this.http.get<ApiResponse<Requests>>(`${this.API_URL}/${id}`).pipe(
      tap((selectedRepair: any) => console.log(`${selectedRepair}`)),
      catchError((error) => of(<ApiResponse<Requests>>{}))
    );
  }

  updateRepair(id: string, body: object): Observable<ApiResponse<Requests>>{
    return this.http.patch<ApiResponse<Requests>>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(<ApiResponse<Requests>>{})),
    );
  }

  deleteRepair(id: string): Observable<ApiResponse<Requests>> {
    return this.http.delete<ApiResponse<Requests>>(`${this.API_URL}/${id}`).pipe(
      tap(deletedRepair => console.log(`${deletedRepair}`)),
      catchError(error => of(<ApiResponse<Requests>>{}))
    );
  }
}
