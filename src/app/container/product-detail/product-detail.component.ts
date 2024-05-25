import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent{

  @Input() productListcomp : ProductListComponent = undefined;

  product : Product;

  ngOnInit(){
    this.product = this.productListcomp.selectedProduct;
    console.log("selected item name : " + this.product.name);
  }
}
