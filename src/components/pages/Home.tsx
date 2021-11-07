import styled from 'styled-components';
import Search from '../elements/Search';
import { Padding } from '../mixins/Mixins';
import CountryCard from '../elements/CountryCard';
import { useFilteredCountries } from '../../contexts/countriesContext';

const Container = styled.div`
  position: relative;
  top: ${(props) => props.theme.sizes.header};
  ${Padding};
`;

const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Home = (): JSX.Element => {
  const { filteredData, isError, isLoading } = useFilteredCountries();

  return (
    <Container>
      <Search />

      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>An error ocurred..</h4>}
      {!isLoading && !isError && (
        <CountryContainer>
          {filteredData?.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </CountryContainer>
      )}
    </Container>
  );
};

export default Home;
