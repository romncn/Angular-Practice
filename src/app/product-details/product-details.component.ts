import { Component, OnInit } from '@angular/core';

import { products } from "../products";
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  addToCart(product){
    window.alert('Your product has been added to cart')
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parems => {
      this.product = products[+parems.get('productId')];
    })
  }

}
