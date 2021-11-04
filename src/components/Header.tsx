import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: min(1rem, 5vw);
  padding-right: min(1rem, 5vw);
  background: ${(props) => props.theme.colors.light.elements};
  box-shadow: 0 0 3px grey;
`;

const Header = (): JSX.Element => {
  return (
    <Container>
      <h3>Where in the world</h3>
      <h3>dark mode</h3>
    </Container>
  );
};

export default Header;
