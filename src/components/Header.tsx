import styled from 'styled-components';
import { useThemeStore } from '../contexts/themeContext';
import { darkTheme, lightTheme } from '../contexts/themes';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: min(1rem, 5vw);
  padding-right: min(1rem, 5vw);
  background: ${(props) => props.theme.colors.elements};
  box-shadow: 0 0 5px black;
`;

const Header = (): JSX.Element => {
  const { theme, setTheme } = useThemeStore();

  const switchTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <Container>
      <h3>Where in the world</h3>
      <h3 onClick={() => switchTheme()}>dark mode</h3>
    </Container>
  );
};

export default Header;
