import styled from 'styled-components';
import { Padding } from '../mixins/Mixins';
import { useCountry, ICountryDetail } from '../../data/useCountry';
import { Title, Property, Value } from '../elements/Typography';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  top: ${(props) => props.theme.sizes.header};
  ${Padding};
`;

interface IBordering {
  name: string;
  iioc: string;
}

const Country = (): JSX.Element => {
  const { cioc } = useParams();

  //TODO: Refactor to do all data fetching including the array of bordering countries
  const { data, isError, isLoading, setIioc } = useCountry();
  const [bordering, setBordering] = useState<IBordering[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    cioc && setIioc(cioc);
  }, [cioc]);

  useEffect(() => {
    const fetchNames = async () => {
      var borders: IBordering[] = [];
      if (!data) return;
      try {
        for await (const border of data.borders) {
          // console.log(
          //   'trying to fetch ' +
          //     `https://restcountries.com/v3.1/alpha/${border}?fields=name`
          // );
          const results = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}?fields=name`
          );

          if (results.ok) {
            const rawData: ICountryDetail = await results.json();
            borders.push({
              name: rawData.name.common,
              iioc: border,
            });
            // console.log(rawData);
          } else {
            console.log('Something went wrong');
          }
        }
        setBordering(borders);
        // console.log(borders);
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    };

    // data && console.log(data);
    data && fetchNames();
  }, [data]);

  return (
    <Container>
      {/* <h4>{JSON.stringify(data?.currencies)}</h4> */}
      <button onClick={() => navigate('/')}>Back</button>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>An error ocurred..</h4>}
      {!isLoading && !isError && data && (
        <div>
          <img src={data.flags.png} />
          <Title>{data.name.common}</Title>
          <div>
            <div>
              <Property>Native Name: </Property>
              <Value>{Object.values(data.name.nativeName)[0].official}</Value>
            </div>
            <div>
              <Property>Population: </Property>
              <Value>{data.population.toLocaleString()}</Value>
            </div>

            <div>
              <Property>Region: </Property>
              <Value>{data.region}</Value>
            </div>
            <div>
              <Property>Subregion: </Property>
              <Value>{data.subregion}</Value>
            </div>

            <div>
              <Property>Capital: </Property>
              <Value>{data.capital}</Value>
            </div>
          </div>
          <div>
            <div>
              <Property>Top Level Domain: </Property>
              <Value>{data.tld[0]}</Value>
            </div>
            <div>
              <Property>Currencies: </Property>
              <Value>
                {Object.values(data.currencies).map((currency) => (
                  <span key={currency.name}>{currency.name} </span>
                ))}
              </Value>
            </div>
            <div>
              <Property>Languages: </Property>
              <Value>
                {Object.values(data.languages).map((language) => (
                  <span key={language}>{language} </span>
                ))}
              </Value>
            </div>
          </div>
          <div>
            <Property>Border Countries: </Property>
            {bordering.map((border) => (
              <button
                key={border.name}
                onClick={() => navigate(`/country/${border.iioc}`)}
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
