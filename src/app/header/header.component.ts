import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // template: '<h2>Aswin</h2>',
  styleUrls: ['./header.component.css']
  // styles: ['a{text-decoration: none; margin: 0 10px;}', 'button{padding: 10px 20px}', '.ekart--header{width: 100%; height: 70px }']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
