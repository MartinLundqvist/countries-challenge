import styled from 'styled-components';
import Page from '../elements/Page';
import Search from '../elements/Search';
import CountryCard from '../elements/CountryCard';
import { useCountries } from '../../hooks/useCountries';
import { useEffect, useState } from 'react';
import { ICountry } from '../../types';
import { useSearch } from '../../hooks/useSearch';

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Home = (): JSX.Element => {
  const [filteredCountries, setFilteredCountries] = useState<ICountry[] | null>(
    null
  );
  const { countriesAPI, isError, isLoading } = useCountries();
  const { countrySearch, regionFilter, countriesToShow } = useSearch();

  useEffect(() => {
    countriesAPI &&
      setFilteredCountries(
        countriesAPI.filter({ countrySearch, regionFilter, countriesToShow })
      );
  }, [countriesAPI, countrySearch, regionFilter, countriesToShow]);

  return (
    <Page>
      <Search />
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>An error ocurred..</h4>}
      {!isLoading && !isError && (
        <CountryContainer>
          {filteredCountries?.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </CountryContainer>
      )}
    </Page>
  );
};

export default Home;
