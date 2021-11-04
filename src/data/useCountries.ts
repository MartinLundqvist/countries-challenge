import { useEffect, useState } from 'react';

// This is a dirty one, because it only types out parts of the response. But hey... it works...
export interface ICountry {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
  cioc: string;
}

interface IUseCountriesProps {
  data: ICountry[] | null;
  isError: boolean;
  isLoading: boolean;
}

const useCountries = (): IUseCountriesProps => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ICountry[] | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cioc'
        );
        if (results.ok) {
          const rawData = await results.json();
          setData(rawData);
        } else {
          setIsError(true);
          setData(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    };

    !data && fetchCountries();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export { useCountries };
