import styled, { css } from 'styled-components';
import { BoxShadow } from '../mixins/Mixins';
import { useSearchContext } from '../../contexts/searchContext';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const Sizing = css`
  padding: 1rem;
  border: none;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.input};
  outline: none;
  ${BoxShadow};
`;

const Input = styled.input`
  width: max(10rem, 30%);
  ${Sizing};
`;

const Select = styled.select`
  width: max(min-content, 10%);
  ${Sizing};
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

//Contexts:
//Boundary: Max #countries to show (0 (which means no filter), 10, 25, 50, )
//Filters applied: Region, Country name (starts with)

const Search = (): JSX.Element => {
  const {
    countrySearch,
    regionFilter,
    countriesToShow,
    setCountrySearch,
    setRegionFilter,
    setCountriesToShow,
  } = useSearchContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountrySearch(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionFilter(event.target.value);
  };

  const handleCountriesToShowChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === 'All') {
      setCountriesToShow(0);
    } else {
      setCountriesToShow(parseInt(event.target.value, 10));
    }
  };

  return (
    <Container>
      <Input
        name='countrysearch'
        placeholder='Search for a country'
        autoComplete='off'
        onChange={(event) => handleSearchChange(event)}
      ></Input>
      <Spacer />
      <Select
        name='regionfilter'
        onChange={(event) => handleRegionChange(event)}
      >
        <option disabled>Filter by region</option>
        <option>All</option>
        <option>Africa</option>
        <option>Asia</option>
        <option>More</option>
        <option>More...</option>
      </Select>
      <Select
        name='countriestoshow'
        onChange={(event) => handleCountriesToShowChange(event)}
      >
        <option disabled># Countries</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>All</option>
      </Select>
    </Container>
  );
};

export default Search;
