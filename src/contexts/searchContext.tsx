import React, { useContext, createContext, useState, useEffect } from 'react';
// import { ITheme, lightTheme } from './themes';

interface ISearchContext {
  regionFilter: string | null; //Unset (null) or a region
  countrySearch: string | null; //Unset (null) or current search state (can be anything from empty to a full country name)
  countriesToShow: number; //Number of countries to display, default will be 10
  setRegionFilter: (region: string) => void;
  setCountrySearch: (country: string) => void;
  setCountriesToShow: (countries: number) => void;
}

const SearchContext = createContext<ISearchContext>({
  regionFilter: null,
  countrySearch: null,
  countriesToShow: 10,
  setRegionFilter: () => {},
  setCountrySearch: () => {},
  setCountriesToShow: () => {},
});

const useSearchContext = () => useContext(SearchContext);

interface ISearchContextProps {
  children: React.ReactNode;
}

const SearchContextProvider = ({
  children,
}: ISearchContextProps): JSX.Element => {
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState<string | null>(null);
  const [countriesToShow, setCountriesToShow] = useState(10);

  // Debugging only
  //   useEffect(() => {
  //     console.log('country ' + countrySearch);
  //     console.log('region ' + regionFilter);
  //     console.log('countries ' + countriesToShow);
  //   }, [countrySearch, regionFilter, countriesToShow]);

  return (
    <SearchContext.Provider
      value={{
        regionFilter,
        countrySearch,
        countriesToShow,
        setRegionFilter,
        setCountrySearch,
        setCountriesToShow,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, useSearchContext };
