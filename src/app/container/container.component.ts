import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  listOfString : string[] = ["Aswin", "Kannan", "Achu", "Ambu"];

  searchText : string = '';

  onSearcgTextChanged(value: string){
    this.searchText = value;
  }

  // @ViewChild('ProductListComponent') productListComponent : ProductListComponent  

  @ViewChild(ProductListComponent) productListComponent : ProductListComponent
}
