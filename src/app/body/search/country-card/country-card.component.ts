import { Component, Input, OnInit } from '@angular/core';
import { CountryList } from 'src/app/data/country-list';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input()
  country!: CountryList;

  constructor() { }

  ngOnInit(): void {
  }

}
