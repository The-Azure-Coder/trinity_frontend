import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { environment } from 'src/environments/environment';
import { Observable, of, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = environment.BASE_URL + '/products'

  constructor(private http: HttpClient) { }

  createproduct(data: object): Observable<Products> {
    return this.http.post<Products>(`${this.API_URL}`, data).pipe(
      tap(newProduct => console.log(`${newProduct}`)),
      catchError(error => of())
    );
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.API_URL).pipe(
      tap((allProducts: any) => console.log(`${allProducts}`)),
      catchError(error => of([])),
    );
  }

  getProductById(id: string): Observable<Products | any> {
    return this.http.get<Products>(`${this.API_URL}/${id}`).pipe(
      tap(selectedproduct => console.log(`${selectedproduct}`)),
      catchError(error => of(new Products())),
    );
  }

  updateProduct(id: string, body: object): Observable<Products> {
    return this.http.patch<Products>(`${this.API_URL}/${id}`, body).pipe(
      tap(updatedRecord => console.log(`${updatedRecord}`)),
      catchError(error => of(new Products())),
    );
  }

  deleteProduct(id: string): Observable<Products> {
    return this.http.delete<Products>(`${this.API_URL}/${id}`).pipe(
      tap(deletedProduct => console.log(`${deletedProduct}`)),
      catchError(error => of())
    );
  }
}
