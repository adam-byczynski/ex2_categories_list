import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class GetCategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getCategories(): Observable<any[]> {
    return this._httpClient.get<any[]>('https://fakestoreapi.com/products/categories');
  }
}
