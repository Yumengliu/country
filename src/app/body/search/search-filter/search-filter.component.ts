import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
