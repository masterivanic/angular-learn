import { AppDataState, DataStateEnum } from './../../state/product.state';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, startWith } from 'rxjs';
import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$:Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    // this.productsService.getAllProducts()
    //   .subscribe(data => {
    //     this.products = data;
    //   })
    this.products$ =
      this.productsService.getSelectedProducts().pipe(
        map((data: any) => {
          console.log(data)
          return ({
            dataState: DataStateEnum.LOADED,
            data:data
          })
        }),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      )
  }

}
