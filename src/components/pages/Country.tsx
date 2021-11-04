import styled from 'styled-components';

import { useCountry } from '../../data/useCountry';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Container = styled.div``;

const Country = (): JSX.Element => {
  const { cioc } = useParams();
  const { data, isError, isLoading, setIioc } = useCountry();

  useEffect(() => {
    cioc && setIioc(cioc);
  }, [cioc]);

  if (isLoading) return <h1>loading</h1>;
  if (isError) return <h1>error...</h1>;

  return (
    <Container>
      <h4>{JSON.stringify(data?.currencies)}</h4>
    </Container>
  );
};

export default Country;
