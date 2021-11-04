import { useCountries } from './data/useCountries';

const Home = (): JSX.Element => {
  const { data, isError, isLoading } = useCountries();

  if (isLoading) return <h1>loading</h1>;
  if (isError) return <h1>error...</h1>;

  return (
    <>
      <h1>Countries</h1>
      <ul>
        {data?.map((country, index) => (
          <li key={index}>
            <a href={`/country/${country.cioc}`}>{country.name.common}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
