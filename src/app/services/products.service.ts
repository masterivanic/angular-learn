import { Product } from './../models/product.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient ) { }

  getAllProducts():Observable<Product[]> {
    let host = environment.host
    return this.http.get<Product[]>(host + "/products");
  }

  getSelectedProducts():Observable<Product[]> {
    let host = (Math.random() > 0.1) ? environment.host : environment.unreacheable
    return this.http.get<Product[]>(host + "/products?selected=true");
  }
}
