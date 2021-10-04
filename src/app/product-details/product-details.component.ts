import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { Product, products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
   const productId = this.route.snapshot.paramMap.get('productId');
   
   this.product = products.find(product => product.id === Number(productId));
   console.log(this.product);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

}