import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  itemsInCart(){
    return this.cartService.getItem().length;
  }

  ngOnInit(): void {
  }
}
