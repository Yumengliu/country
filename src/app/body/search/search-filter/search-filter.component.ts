import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  region: FormControl = new FormControl();

  @Output()
  regionChanged = new EventEmitter<string>();

  regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]

  constructor() { }

  ngOnInit(): void {
    this.region.valueChanges.subscribe(() => this.regionChanged.emit(this.region.value));
  }

}
