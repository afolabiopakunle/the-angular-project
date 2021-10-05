import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product, Shipping } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
    alert("Product added to cart")
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get<Shipping>('/assets/shipping.json')
  }
}