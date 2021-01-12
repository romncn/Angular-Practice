import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkOutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.items = this.cartService.getItem();
    
    this.checkOutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
  }

  onSubmit(customerData) {
    console.log('submited', customerData);

    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItem();
  }

}
