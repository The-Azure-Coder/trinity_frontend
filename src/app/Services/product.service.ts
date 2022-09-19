import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = environment.BASE_URL + '/products'

  constructor(private http: HttpClient) { }

  createproduct(data: object): Observable<ApiResponse<Products>> {
    return this.http.post<ApiResponse<Products>>(`${this.API_URL}`, data).pipe(
      tap(newProduct => console.log(`${newProduct}`)),
      catchError(error => of())
    );
  }

  getProducts(): Observable<ApiResponse<Products[]>> {
    return this.http.get<ApiResponse<Products>>(this.API_URL).pipe(
      tap((allProducts: any) => console.log(`${allProducts}`)),
      catchError(error => of(<ApiResponse<Products[]>>{})),
    );
  }

  getProductById(id: string): Observable<ApiResponse<Products>> {
    return this.http.get<ApiResponse<Products>>(`${this.API_URL}/${id}`).pipe(
      tap((selectedmessage: any) => console.log(`${selectedmessage}`)),
      catchError((error) => of(<ApiResponse<Products>>{}))
    );
  }

  updateProduct(id: string, body: object): Observable<ApiResponse<Products>> {
    return this.http.patch<ApiResponse<Products>>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(<ApiResponse<Products>>{})),
    );
  }

  deleteProduct(id: string): Observable<ApiResponse<Products>> {
    return this.http.delete<ApiResponse<Products>>(`${this.API_URL}/${id}`).pipe(
      tap(deletedProduct => console.log(`${deletedProduct}`)),
      catchError(error => of(<ApiResponse<Products>>{}))
    );
  }
}
