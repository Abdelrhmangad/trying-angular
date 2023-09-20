import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
   }
}
