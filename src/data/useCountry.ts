import { useEffect, useState } from 'react';
import { ICountry } from './useCountries';

// This is a dirty one, because it only types out parts of the response. But hey... it works...
export interface ICountryDetail extends ICountry {
  name: {
    common: string;
    nativeName: {
      [id: string]: {
        official: string;
      };
    };
  };
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

interface IUseCountryDetailProps {
  data: ICountryDetail | null;
  isError: boolean;
  isLoading: boolean;
  setIioc: (iioc: string) => void;
}

const useCountry = (): IUseCountryDetailProps => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ICountryDetail | null>(null);
  const [iioc, setIioc] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await fetch(
          `https://restcountries.com/v3.1/alpha/${iioc}?fields=name,capital,region,flags,population,cioc,subregion,tld,currencies,languages,borders`
        );
        if (results.ok) {
          const rawData = await results.json();

          // //Debug
          // console.log(rawData);

          // TODO: This might not be needed...
          if (rawData.length > 1) {
            setData(rawData[0]);
          } else {
            setData(rawData);
          }
        } else {
          setIsError(true);
          setData(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    };

    iioc && fetchCountry();
  }, [iioc]);

  return {
    data,
    isLoading,
    isError,
    setIioc,
  };
};

export { useCountry };
