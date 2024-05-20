import { Component, OnInit } from '@angular/core';

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


}
