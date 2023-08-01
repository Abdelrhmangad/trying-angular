import { Component } from '@angular/core';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [...products];
  productsLength = this.products.length;
  deletedPdts: any = [];

  share() {
    window.alert('The product has been shared!');
  }

  deletePdt(pdtID: number) {
    this.deletedPdts = [
      ...this.deletedPdts,
      this.products.find((eachPdt) => eachPdt.id === pdtID),
    ];
    this.products = this.products.filter((eachPdt) => eachPdt.id !== pdtID);
    this.productsLength = this.products.length;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addPdt(pdt: Product) {
    this.products = [...this.products, pdt];
    this.productsLength = this.products.length;
  }
}
