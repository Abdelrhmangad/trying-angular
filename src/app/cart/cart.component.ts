import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    city: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }


  removeItem(index: number) {
    this.cartService.removeItem(index)
  }
}
