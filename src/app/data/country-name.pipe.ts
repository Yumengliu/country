import { Pipe, PipeTransform } from '@angular/core';
import { CountryService } from '../country.service';

@Pipe({
  name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {

  constructor(private countryService: CountryService) { }

  transform(value: string, ...args: unknown[]): string {
    let name = this.countryService.getCountryNameByCode(value);
    return name == undefined ? value : name;
  }

}
