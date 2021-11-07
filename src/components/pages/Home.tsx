import { ICountry, useCountries } from '../../data/useCountries';
import styled from 'styled-components';
import Search from '../elements/Search';
import { Padding } from '../mixins/Mixins';
import { useFilteredCountries } from '../../contexts/countriesContext';

const Container = styled.div`
  position: relative;
  top: ${(props) => props.theme.sizes.header};
  ${Padding};
`;

const CountryContainer = styled.div``;

const Home = (): JSX.Element => {
  const { filteredData, isError, isLoading } = useFilteredCountries();

  return (
    <Container>
      <Search />

      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>An error ocurred..</h4>}
      {!isLoading && !isError && (
        <CountryContainer>
          <ul>
            {filteredData?.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </ul>
        </CountryContainer>
      )}
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
