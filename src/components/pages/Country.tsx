import styled from 'styled-components';
import Page from '../elements/Page';
import { BoxShadow, BoxShadowHovered } from '../mixins/Mixins';
import ArrowLeftIcon from '../elements/ArrowLeftIcon';
import { TitleBig, Property, Value } from '../elements/Typography';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { IBorderingCountry, ICountry } from '../../types';
import { mobile } from '../../styles/devices';

const BackButtonContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.5em 1em 0.5em 1em;
  outline: none;
  background: ${(props) => props.theme.colors.elements};
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: ${(props) => props.theme.sizes.bodyFontSize};
  background: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.text};
  ${BoxShadow};

  &:hover {
    ${BoxShadowHovered};
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  gap: 2rem;

  //Desktop
  /* grid-template-columns: 2fr 1fr 1fr; */
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);

  //Mobile
  @media ${mobile} {
    gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }
`;

interface IFlag {
  source: string;
}

const Flag = styled.div<IFlag>`
  max-width: 320px;
  min-width: 250px;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  background-image: ${(props) => `url('${props.source}')`};
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;

  @media ${mobile} {
    /* max-height: 215px; */
    min-height: 170px;
    background-position: center center;
    /* min-height: min-content; */
    /* height: 215px; */
    /* max-height: 215px; */
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

const TitleItem = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / 2;

  @media ${mobile} {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

const DetailLeftItem = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  @media ${mobile} {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
`;

const DetailRightItem = styled.div`
  grid-column: 3 / -1;
  grid-row: 2 / 3;

  @media ${mobile} {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
  }
`;

const BordersItem = styled.div`
  grid-column: 2 / -1;
  grid-row: 3 / 4;

  @media ${mobile} {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  }
`;

const BordersButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
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
    <Page>
      <BackButtonContainer>
        <Button onClick={() => navigate('/')}>
          <ArrowLeftIcon /> Back
        </Button>
      </BackButtonContainer>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>An error ocurred..</h4>}
      {activeCountry && borderingCountries && (
        <ContentContainer>
          <Flag source={activeCountry.flags.png} />
          <TitleItem>
            <TitleBig>{activeCountry.name.common}</TitleBig>
          </TitleItem>
          <DetailLeftItem>
            <div>
              <Property responsive>Native Name: </Property>
              <Value responsive>
                {Object.values(activeCountry.name.nativeName)[0].official}
              </Value>
            </div>
            <div>
              <Property responsive>Population: </Property>
              <Value responsive>
                {activeCountry.population.toLocaleString()}
              </Value>
            </div>

            <div>
              <Property responsive>Region: </Property>
              <Value responsive>{activeCountry.region}</Value>
            </div>
            <div>
              <Property responsive>Subregion: </Property>
              <Value> responsive{activeCountry.subregion}</Value>
            </div>

            <div>
              <Property responsive>Capital: </Property>
              <Value responsive>{activeCountry.capital}</Value>
            </div>
          </DetailLeftItem>
          <DetailRightItem>
            <div>
              <Property responsive>Top Level Domain: </Property>
              <Value responsive>{activeCountry.tld[0]}</Value>
            </div>
            <div>
              <Property responsive>Currencies: </Property>
              <Value responsive>
                {Object.values(activeCountry.currencies).map((currency) => (
                  <span key={currency.name}>{currency.name} </span>
                ))}
              </Value>
            </div>
            <div>
              <Property responsive>Languages: </Property>
              <Value responsive>
                {Object.values(activeCountry.languages).map((language) => (
                  <span key={language}>{language} </span>
                ))}
              </Value>
            </div>
          </DetailRightItem>
          <BordersItem>
            <Property responsive>Border Countries: </Property>
            <BordersButtonsContainer>
              {borderingCountries.map((border) => (
                <Button
                  key={border.name}
                  onClick={() => navigate(`/country/${border.cioc}`)}
                >
                  {border.name}
                </Button>
              ))}
            </BordersButtonsContainer>
          </BordersItem>
        </ContentContainer>
      )}
    </Page>
  );
};

export default Country;
