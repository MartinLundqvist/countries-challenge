import { ICountry, useCountries } from '../../data/useCountries';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div``;

const Search = styled.div``;

const CountryContainer = styled.div``;

const Home = (): JSX.Element => {
  const { data, isError, isLoading } = useCountries();

  if (isLoading) return <h1>loading</h1>;
  if (isError) return <h1>error...</h1>;

  return (
    <Container>
      <Search />
      <CountryContainer>
        <h1>Countries</h1>
        <ul>
          {data?.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </ul>
      </CountryContainer>
    </Container>
  );
};

interface ICountryCardProps {
  country: ICountry;
}

const CountryCard = ({ country }: ICountryCardProps): JSX.Element => {
  return (
    <li>
      <a href={`/country/${country.cioc}`}>{country.name.common}</a>
    </li>
  );
};

export default Home;
