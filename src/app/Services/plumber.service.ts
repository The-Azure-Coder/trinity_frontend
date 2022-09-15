import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plumbers } from '../Models/plumber';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { Products } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class PlumberService {

  API_URL = environment.BASE_URL + '/plumbers'

  constructor(private http: HttpClient) { }

  addPlumber(data:object):Observable<Plumbers>{
    return this.http.post<Plumbers>(`${this.API_URL}`, data).pipe(
      tap( newPlumber => console.log(`${newPlumber}`)),
      catchError( error => of())
    );
  }

  getAllPlumbers(): Observable<Plumbers[]>{
    return this.http.get<Plumbers[]>(this.API_URL).pipe(
      tap((plumbers: any) => console.log(`${plumbers}`)),
      catchError(error => of([])),
    );
  }

  getPlumberById(id: string):Observable<Plumbers | any>{
    return this.http.get<Plumbers>(`${this.API_URL}/${id}`).pipe(
      tap(selectedplumber => console.log(`${selectedplumber}`)),
      catchError(error => of(new Plumbers())),
    );
  }
   
  updatePlumber(id: string, body:object): Observable<Plumbers>{
    return this.http.patch<Plumbers>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(new Plumbers())),
    );
  }

  deleteMessage(id:string):Observable<Plumbers>{
    return this.http.delete<Plumbers>(`${this.API_URL}/${id}`).pipe(
      tap( deletedplumber => console.log(`${deletedplumber}`)),
      catchError( error => of())
    );
  }

}
