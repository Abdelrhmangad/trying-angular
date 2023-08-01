import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-deleted-products',
  templateUrl: './deleted-products.component.html',
  styleUrls: ['./deleted-products.component.scss'],
})
export class DeletedProductsComponent {
  @Input() deletedPdts: Product[] | undefined;
  @Output() resotrePdt = new EventEmitter<Product>;
  restore(pdt: Product) {
    this.resotrePdt.emit(pdt);
    this.deletedPdts = this.deletedPdts?.filter(eachPdt => eachPdt.id !== pdt.id)
  }
}
