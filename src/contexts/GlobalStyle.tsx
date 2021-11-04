import { createGlobalStyle } from 'styled-components';
import { ITheme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    body {
        margin: 0;
        box-sizing: border-box;
        background: ${(props) => props.theme.colors.light.background};
        font-family: 'Nunito Sans', sans-serif;

        * {
            box-sizing: border-box;
        }
    }

`;

export default GlobalStyle;
