import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  @Output() filterName = new EventEmitter<string>();

  ngOnInit(): void {
    this.name.valueChanges.subscribe(() => this.filterName.emit(this.name.value));
  }

}
