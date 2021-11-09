export interface ITheme {
  colors: {
    elements: string;
    background: string;
    text: string;
    input: string;
  };
  sizes: {
    padding: string;
    header: string;
    footer: string;
    bodyFontSize: string;
  };
}

const padding = 'max(2rem, 5vw)';
const header = '4rem';
const footer = '1rem';
const bodyFontSize = 'clamp(0.7rem, 1.8vw, 1.0rem)';

const darkTheme: ITheme = {
  colors: {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 100%)',
  },
  sizes: {
    padding: padding,
    header: header,
    bodyFontSize: bodyFontSize,
    footer: footer,
  },
};

const lightTheme: ITheme = {
  colors: {
    elements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
  },
  sizes: {
    padding: padding,
    header: header,
    bodyFontSize: bodyFontSize,
    footer: footer,
  },
};

export { darkTheme, lightTheme };
