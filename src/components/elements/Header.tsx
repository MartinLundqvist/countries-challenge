import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { darkTheme, lightTheme } from '../../styles/themes';
import { Padding, BoxShadow } from '../mixins/Mixins';
import { MoonIcon } from './Icons';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: ${(props) => props.theme.sizes.header};
  flex-direction: row;
  justify-content: space-between;
  ${Padding};
  ${BoxShadow};
  background: ${(props) => props.theme.colors.elements};
  z-index: 1;
`;

const StyledH6 = styled.h6`
  font-weight: 300;
  cursor: pointer;
`;

const Header = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return (
    <Container>
      <h3>Where in the world?</h3>
      <StyledH6 onClick={() => switchTheme()}>
        <MoonIcon filled={theme === darkTheme} />{' '}
        {theme === lightTheme ? 'Dark Mode' : 'Light mode'}
      </StyledH6>
    </Container>
  );
};

export default Header;
