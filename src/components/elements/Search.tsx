import styled, { css } from 'styled-components';
import { BoxShadow } from '../mixins/Mixins';

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
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.input};
  ${BoxShadow};
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

//Contexts:
//Boundary: Max #countries to show (10, 25, 50, all)
//Filters applied: Region, Country name (starts with)

const Search = (): JSX.Element => {
  return (
    <Container>
      <Input name='Search for a country'></Input>
      <Spacer />
      <Select>
        <option>All</option>
        <option>Africa</option>
        <option>Asia</option>
        <option>More</option>
        <option>More...</option>
      </Select>
      <Select>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>No max</option>
      </Select>
    </Container>
  );
};

export default Search;
