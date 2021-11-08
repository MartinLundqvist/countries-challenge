import { createGlobalStyle } from 'styled-components';
import { ITheme } from './themes';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`

    *, *::after, *::before {
        box-sizing: border-box;
    }

    html, body  {
        margin: 0;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-family: 'Nunito Sans', sans-serif;
    }

`;

export default GlobalStyle;
