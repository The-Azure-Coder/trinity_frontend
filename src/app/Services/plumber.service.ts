import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plumbers } from '../models/plumber';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class PlumberService {
  API_URL = environment.BASE_URL + '/plumbers';

  constructor(private http: HttpClient) {}

  addPlumber(data: Plumbers): Observable<ApiResponse<Plumbers>> {
    return this.http.post<ApiResponse<Plumbers>>(this.API_URL, data);
  }

  getAllPlumbers(): Observable<ApiResponse<Plumbers[]>> {
    return this.http.get<ApiResponse<Plumbers[]>>(this.API_URL);
  }

  getPlumberById(id: string): Observable<ApiResponse<Plumbers>> {
    return this.http.get<ApiResponse<Plumbers>>(`${this.API_URL}/${id}`);
  }



  updatePlumber(id: string, body: object): Observable<ApiResponse<Plumbers>> {
    return this.http.patch<ApiResponse<Plumbers>>(
      `${this.API_URL}/${id}`,
      body
    );
  }

  deletePlumber(id: string): Observable<ApiResponse<Plumbers>> {
    return this.http.delete<ApiResponse<Plumbers>>(`${this.API_URL}/${id}`);
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
