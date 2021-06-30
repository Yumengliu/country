import { CountryList } from "./country-list";

export interface CountryDetail extends CountryList {
  nativeName: string,
  topLevelDomain: Array<string>,
  currencies: Array<Currency>,
  languages: Array<Language>,
  subregion: string,
  capital: string,
  borders: Array<string>,
}

interface Currency {
  code: string,
  name: string,
  symbol: string,
}

interface Language {
  name: string,
}


