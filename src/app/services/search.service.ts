import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  getSearches(searchTerm: string): Observable<Product[]> {

    return this.http.get<Product[]>(this.url + '?q=' + searchTerm)
  }

}