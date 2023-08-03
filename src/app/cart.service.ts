import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // items: Product[] = [{ id: 12, name: 'gad', description: 'hello ', price: 210 }];
  items: Product[] = [];

  /* . . . */

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  getCartLength() {
    console.log("GET CART ITEMS LENGTH")
    return this.items.length;
  }

  removeItem(index: number, product: Product) {
    return this.items.splice(index, 1)
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }
  /* . . . */
}