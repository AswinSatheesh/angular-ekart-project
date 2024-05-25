import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  searchText : string = "";

  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }

  @ViewChild('searchValue') searchEleInput : ElementRef

  searchInput(){
    this.searchText = this.searchEleInput.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }


}
