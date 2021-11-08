export interface ICountry {
  name: {
    common: string;
    nativeName: {
      [id: string]: {
        official: string;
      };
    };
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
  cca3: string;
  //   cioc: string;
  subregion: string;
  tld: string[];
  currencies: {
    [id: string]: {
      name: string;
    };
  };
  languages: {
    [id: string]: string;
  };
  borders: string[];
}

export interface IBorderingCountry {
  name: string;
  cioc: string;
}

export interface ISearchFilter {
  regionFilter: string | null;
  countrySearch: string | null;
  countriesToShow: number;
}
