import { useCountries, ICountry } from '../data/useCountries';
import { useSearchContext } from './searchContext';
import { useEffect, useState, createContext, useContext } from 'react';

/*
pick up countries using useCountry
pick up the serach context

*/

interface ICountriesContext {
  filteredData: ICountry[] | null;
  isLoading: boolean;
  isError: boolean;
}

const CountriesContext = createContext<ICountriesContext>({
  filteredData: null,
  isLoading: false,
  isError: false,
});

const useFilteredCountries = () => useContext(CountriesContext);

interface ICountriesContextProvider {
  children: React.ReactNode;
}

const CountriesContextProvider = ({
  children,
}: ICountriesContextProvider): JSX.Element => {
  const [filteredData, setFilteredData] = useState<ICountry[] | null>(null);
  const { data, isLoading, isError } = useCountries();
  const { countrySearch, regionFilter, countriesToShow } = useSearchContext();

  useEffect(() => {
    const filterData = (rawData: ICountry[]): ICountry[] => {
      let results = [...rawData];

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
          country.name.common
            .toLowerCase()
            .includes(countrySearch.toLowerCase())
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

    if (data) {
      setFilteredData(filterData(data));
    }
  }, [countrySearch, regionFilter, countriesToShow, data]);

  return (
    <CountriesContext.Provider value={{ isLoading, isError, filteredData }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContextProvider, useFilteredCountries };
