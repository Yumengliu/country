import { Injectable } from '@angular/core';
import { CountryList } from './data/country-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const allCountriesPath = "https://restcountries.eu/rest/v2/all"

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Array<CountryList> = [];

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Array<CountryList>> {
    if (this.countries.length == 0) {
      let allCountries$ = this.http.get<Array<CountryList>>(allCountriesPath);
      allCountries$.subscribe((data) => this.countries = data);
      return allCountries$;
    }
    return of(this.countries);
  }

  getCountriesByRegion(region: string) {
    return of(this.countries.filter(c => c.region == region));
  }

  getCountriesByNameFilter(name: string) {
    let lowerName = name.toLocaleLowerCase();
    return of(this.countries.filter(c => c.name.toLocaleLowerCase().includes(lowerName)));
  }
}
