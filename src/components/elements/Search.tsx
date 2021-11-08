import styled, { css } from 'styled-components';
import { BoxShadow, BoxShadowHovered } from '../mixins/Mixins';
import { useSearch } from '../../hooks/useSearch';
import { useEffect } from 'react';

interface ISelectOption {
  disabled?: boolean;
  value: string | number;
  option: string;
}

const countriesToShowOptions: ISelectOption[] = [
  { value: 100, option: '# Countries', disabled: true },
  { value: 10, option: '10' },
  { value: 25, option: '25' },
  { value: 50, option: '50' },
  { value: 0, option: 'All' },
];

const regionsOptions: ISelectOption[] = [
  {
    value: 'X',
    option: 'Filter by region',
    disabled: true,
  },
  {
    value: 'All',
    option: 'All',
  },
  {
    value: 'Asia',
    option: 'Asia',
  },
  {
    value: 'Americas',
    option: 'Americas',
  },
  {
    value: 'Oceania',
    option: 'Oceania',
  },
  {
    value: 'Europe',
    option: 'Europe',
  },
  {
    value: 'Africa',
    option: 'Africa',
  },
  {
    value: 'Antarctic',
    option: 'Antarctic',
  },
];

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
  &:hover {
    ${BoxShadowHovered};
  }
`;

const Input = styled.input`
  width: max(10rem, 30%);
  ${Sizing};
`;

const Select = styled.select`
  width: max(5rem, 10%);
  ${Sizing};
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

const Search = (): JSX.Element => {
  const {
    countrySearch,
    regionFilter,
    countriesToShow,
    setCountrySearch,
    setRegionFilter,
    setCountriesToShow,
  } = useSearch();

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

  //TODO: Replace with stateful filters...
  const clearFilters = () => {
    setCountrySearch('');
    setCountriesToShow(10);
    setRegionFilter('All');
  };

  useEffect(() => {
    clearFilters();
  }, []);

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
        {regionsOptions.map((option) => (
          <option
            key={option.value}
            disabled={option.disabled && option.disabled}
            value={option.value}
          >
            {option.option}
          </option>
        ))}
      </Select>
      <Select
        name='countriestoshow'
        onChange={(event) => handleCountriesToShowChange(event)}
      >
        {countriesToShowOptions.map((option) => (
          <option
            key={option.value}
            disabled={option.disabled && option.disabled}
            value={option.value}
          >
            {option.option}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default Search;
