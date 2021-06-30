import { Injectable } from '@angular/core';
import { CountryList } from './data/country-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { CountryDetail } from './data/country-detail';

const allCountriesPath = "https://restcountries.eu/rest/v2/all"
const getCountryByCodePath = "https://restcountries.eu/rest/v2/alpha/"

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Array<CountryList> = [];

  codeToNameMap: Map<string, string> = new Map();

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Array<CountryList>> {
    if (this.countries.length == 0) {
      let allCountries$ = this.http.get<Array<CountryList>>(allCountriesPath);
      allCountries$.subscribe((data) => {
        this.countries = data;
        this.buildCache(data);
      });
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

  getCountryByCode(code: string) {
    return this.http.get<CountryDetail>(getCountryByCodePath + code);
  }

  getCountryNameByCode(code: string): string | undefined {
    if (this.codeToNameMap.size == 0) {
      return undefined;
    }
    return this.codeToNameMap.get(code);
  }

  private buildCache(data: Array<CountryList>) {
    data.forEach(c => this.codeToNameMap.set(c.alpha3Code, c.name));
  }
}
