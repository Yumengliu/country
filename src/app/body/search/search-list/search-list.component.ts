import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/country.service';
import { CountryList } from 'src/app/data/country-list';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  countries: Array<CountryList> = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(data => this.countries = data);
  }

  updateByName(name: string) {
    this.countryService.getCountriesByNameFilter(name).subscribe(data => this.countries = data);
  }

  updateByRegion(region: string) {
    this.countryService.getCountriesByRegion(region).subscribe(data => this.countries = data);
  }
}
