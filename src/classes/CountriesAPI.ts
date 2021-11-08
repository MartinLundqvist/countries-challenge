import { ICountry, IBorderingCountry, ISearchFilter } from '../types';

export class CountriesAPI {
  public countries: ICountry[];

  constructor(countries: ICountry[]) {
    this.countries = countries;
    console.log('Creating an instance of CountriesAPI');
  }

  public find = (cca3: string): ICountry => {
    return this.countries.find((country) => country.cca3 === cca3) as ICountry;
  };

  public bordering = (cca3: string): IBorderingCountry[] => {
    let results: IBorderingCountry[] = [];
    const country = this.countries.find((country) => country.cca3 === cca3);
    country?.borders?.forEach((border) => {
      results.push({
        name: this.countries.find((country) => country.cca3 === border)?.name
          .common!, //Nasty, but should be safe here
        cioc: border,
      });
    });
    return results;
  };

  public filter = ({
    countriesToShow,
    countrySearch,
    regionFilter,
  }: ISearchFilter): ICountry[] => {
    let results = [...this.countries];

    //First filter by region - we don't need to worry about case sensitivity since the region options are picked up from the API
    if (regionFilter && regionFilter !== 'All') {
      const temp = [...results].filter(
        (country) => country.region === regionFilter
      );
      results = [...temp];
    }

    //Then filter by search - we DO need to worry about case sensitivity, since the user may enter anything
    if (countrySearch && countrySearch !== '') {
      const temp = [...results].filter((country) =>
        country.name.common.toLowerCase().includes(countrySearch.toLowerCase())
      );
      results = [...temp];
    }

    //Finally, only present X countries where X is defined by countriesToShow - remember that (0) means no filter
    if (countriesToShow != 0 && results.length > countriesToShow) {
      const temp = [...results].slice(0, countriesToShow);
      results = [...temp];
    }

    return results;
  };
}
