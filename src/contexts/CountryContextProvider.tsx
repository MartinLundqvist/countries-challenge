import { createContext, useContext, useEffect, useState } from 'react';
import { CountriesAPI } from '../classes/CountriesAPI';
import { ICountry } from '../types';

interface ICountryProvider {
  countriesAPI: CountriesAPI | null;
  isLoading: boolean;
  isError: boolean;
}

const CountryContext = createContext<ICountryProvider>({} as ICountryProvider);

interface ICountryProviderProps {
  children: React.ReactNode;
}

const CountryContextProvider = ({
  children,
}: ICountryProviderProps): JSX.Element => {
  const [countriesAPI, setCountriesAPI] = useState<CountriesAPI | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      console.log('Fetching all countries');
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca3,subregion,tld,currencies,languages,borders'
        );
        if (results.ok) {
          const rawData: ICountry[] = await results.json();

          setCountriesAPI(new CountriesAPI(rawData));
        } else {
          setIsError(true);
          setCountriesAPI(null);
          console.log('Error occured ' + JSON.stringify(results));
        }
      } catch (error) {
        console.error(JSON.stringify(error));
      } finally {
        setIsLoading(false);
      }
    };

    !countriesAPI && fetchCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countriesAPI,
        isError,
        isLoading,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContextProvider, CountryContext };
