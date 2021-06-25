import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  countries = [
    1, 2, 3, 4, 5, 6, 7, 8
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
