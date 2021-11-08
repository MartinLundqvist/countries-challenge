import React, { useContext, createContext, useState, useEffect } from 'react';
import { ISearchFilter } from '../types';

interface ISearchContext extends ISearchFilter {
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

interface ISearchContextProps {
  children: React.ReactNode;
}

const SearchContextProvider = ({
  children,
}: ISearchContextProps): JSX.Element => {
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState<string | null>(null);
  const [countriesToShow, setCountriesToShow] = useState(10);

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

export { SearchContextProvider, SearchContext };
