import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedProductsComponent } from './deleted-products.component';

describe('DeletedProductsComponent', () => {
  let component: DeletedProductsComponent;
  let fixture: ComponentFixture<DeletedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedProductsComponent]
    });
    fixture = TestBed.createComponent(DeletedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
