import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CountryService } from 'src/app/country.service';
import { CountryDetail } from 'src/app/data/country-detail';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private countryCode!: string;
  country!: CountryDetail;

  constructor(private route: ActivatedRoute, private countryService: CountryService, private locationService: Location) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.countryService.getCountryByCode(params.get('code')!)))
      .subscribe(data => this.country = data);
  }

  getCurrencies() {
    return this.country.currencies.map(c => c.name).join(', ');
  }

  getLanguages() {
    return this.country.languages.map(l => l.name).join(', ');
  }

  goBack() {
    this.locationService.back();
  }

}
