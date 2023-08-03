import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  cartItemsLength = this.cartService.getItems().length

  getCartLength() {
    return this.cartService.getCartLength();
  }
  constructor(private cartService: CartService) { }
}
