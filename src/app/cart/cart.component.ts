import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();

  removeItem(index: number, product: Product) {
    console.log("CLCIUKED to remove")
    this.cartService.removeItem(index, product)
  }

  constructor(
    private cartService: CartService
  ) { }

}
