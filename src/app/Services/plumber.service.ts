import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plumbers } from '../models/plumber';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { Products } from '../models/product';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class PlumberService {

  API_URL = environment.BASE_URL + '/plumbers'

  constructor(private http: HttpClient) { }

  addPlumber(data: object): Observable<ApiResponse<Plumbers>> {
    return this.http.post<ApiResponse<Plumbers>>(`${this.API_URL}`, data).pipe(
      tap(newPlumber => console.log(`${newPlumber}`)),
      catchError(_error => of())
    );
  }

  getAllPlumbers(): Observable<ApiResponse<Plumbers[]>> {
    return this.http.get<ApiResponse<Plumbers>>(this.API_URL).pipe(
      tap((plumbers: any) => console.log(`${plumbers}`)),
      catchError(_error => of(<ApiResponse<Plumbers[]>>{})),
    );
  }

  getPlumberById(id: string): Observable<ApiResponse<Plumbers>> {
    return this.http.get<ApiResponse<Plumbers>>(`${this.API_URL}/${id}`).pipe(
      tap(selectedplumber => console.log(`${selectedplumber}`)),
      catchError(_error => of(<ApiResponse<Plumbers>>{})),
    );
  }


  updatePlumber(id: string, body:object): Observable<Plumbers>{
    return this.http.patch<Plumbers>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(_error => of(<ApiResponse<Plumbers>>{})),
    );
  }

  deleteMessage(id: string): Observable<ApiResponse<Plumbers>> {
    return this.http.delete<ApiResponse<Plumbers>>(`${this.API_URL}/${id}`).pipe(
      tap(deletedplumber => console.log(`${deletedplumber}`)),
      catchError(_error => of(<ApiResponse<Plumbers>>{}))
    );
  }

  getLimitedPlumbers(
    page = 1,
    limit = 20
  ): Observable<ApiResponse<Plumbers[]>> {
    return this.http.get<ApiResponse<Plumbers[]>>(
      this.API_URL + '?_page=' + page + '&_limit=' + limit
    );
  }

}
