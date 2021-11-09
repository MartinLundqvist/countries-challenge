import { ICountry } from '../../types';
import styled from 'styled-components';
import { BoxShadow, BoxShadowHovered } from '../mixins/Mixins';
import { Property, Value, Title } from '../elements/Typography';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 17rem;
  background: ${(props) => props.theme.colors.elements};
  border-radius: 3px;
  overflow: hidden;
  ${BoxShadow};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    ${BoxShadowHovered};
  }
`;

const CardSubContainer = styled.div`
  padding: 1rem;
`;

interface IFlag {
  source: string;
}

const Flag = styled.div<IFlag>`
  width: 100%;
  height: 60%;
  background-image: ${(props) => `url('${props.source}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

interface ICountryCardProps {
  country: ICountry;
}

const CountryCard = ({ country }: ICountryCardProps): JSX.Element => {
  return (
    <StyledLink to={`/country/${country.cca3}`}>
      <CardContainer>
        <Flag source={country.flags.png} />
        <CardSubContainer>
          <Title>{country.name.common}</Title>
          <div>
            <Property>Population: </Property>
            <Value>{country.population.toLocaleString()}</Value>
          </div>
          <div>
            <Property>Region: </Property>
            <Value>{country.region}</Value>
          </div>
          <div>
            <Property>Capital: </Property>
            <Value>{country.capital}</Value>
          </div>
        </CardSubContainer>
      </CardContainer>
    </StyledLink>
  );
};

export default CountryCard;
