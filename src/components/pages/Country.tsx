import styled from 'styled-components';
import { Padding } from '../mixins/Mixins';
import { Title, Property, Value } from '../elements/Typography';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { IBorderingCountry, ICountry } from '../../types';

const Container = styled.div`
  position: relative;
  top: ${(props) => props.theme.sizes.header};
  ${Padding};
`;

const Country = (): JSX.Element => {
  const { cca3 } = useParams();
  const navigate = useNavigate();
  const { countriesAPI, isLoading, isError } = useCountries();
  const [activeCountry, setActiveCountry] = useState<ICountry | null>(null);
  const [borderingCountries, setBorderingCountries] = useState<
    IBorderingCountry[] | null
  >(null);

  useEffect(() => {
    if (countriesAPI && cca3) {
      setActiveCountry(countriesAPI.find(cca3));
    }
  }, [countriesAPI, cca3]);

  useEffect(() => {
    if (activeCountry && countriesAPI) {
      setBorderingCountries(countriesAPI.bordering(activeCountry.cca3));
    }
  }, [activeCountry]);

  return (
    <Container>
      <button onClick={() => navigate('/')}>Back</button>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>An error ocurred..</h4>}
      {activeCountry && borderingCountries && (
        <div>
          <img src={activeCountry.flags.png} />
          <Title>{activeCountry.name.common}</Title>
          <div>
            <div>
              <Property>Native Name: </Property>
              <Value>
                {Object.values(activeCountry.name.nativeName)[0].official}
              </Value>
            </div>
            <div>
              <Property>Population: </Property>
              <Value>{activeCountry.population.toLocaleString()}</Value>
            </div>

            <div>
              <Property>Region: </Property>
              <Value>{activeCountry.region}</Value>
            </div>
            <div>
              <Property>Subregion: </Property>
              <Value>{activeCountry.subregion}</Value>
            </div>

            <div>
              <Property>Capital: </Property>
              <Value>{activeCountry.capital}</Value>
            </div>
          </div>
          <div>
            <div>
              <Property>Top Level Domain: </Property>
              <Value>{activeCountry.tld[0]}</Value>
            </div>
            <div>
              <Property>Currencies: </Property>
              <Value>
                {Object.values(activeCountry.currencies).map((currency) => (
                  <span key={currency.name}>{currency.name} </span>
                ))}
              </Value>
            </div>
            <div>
              <Property>Languages: </Property>
              <Value>
                {Object.values(activeCountry.languages).map((language) => (
                  <span key={language}>{language} </span>
                ))}
              </Value>
            </div>
          </div>
          <div>
            <Property>Border Countries: </Property>
            {borderingCountries.map((border) => (
              <button
                key={border.name}
                onClick={() => navigate(`/country/${border.cioc}`)}
              >
                {border.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Country;
