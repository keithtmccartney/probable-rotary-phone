import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { AppState } from './../app.state';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
  }

  addProduct(name, price) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product> {
        name: name,
        price: price
      }
    });
  }

  ngOnInit(): void {
  }

}
