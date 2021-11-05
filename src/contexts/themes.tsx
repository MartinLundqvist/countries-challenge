export interface ITheme {
  colors: {
    elements: string;
    background: string;
    text: string;
    input: string;
  };
}

const darkTheme: ITheme = {
  colors: {
    elements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    input: 'hsl(0, 0%, 100%)',
  },
};

const lightTheme: ITheme = {
  colors: {
    elements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    input: 'hsl(0, 0%, 52%)',
  },
};

export { darkTheme, lightTheme };
