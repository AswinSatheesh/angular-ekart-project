import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

  @Input()
  all : number = 0;

  @Input()
  instock : number = 0;

  @Input()
  outofstock : number =0;

  selectedFilterRadioButton: string = 'all';

  @Output()
  selectedFilterRadioButtonChanged : EventEmitter<string> = new EventEmitter<string>(); 

  onSelectedFilterButtonChanged(){
    console.log("child")
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
