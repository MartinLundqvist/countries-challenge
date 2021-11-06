import { css } from 'styled-components';

const Padding = css`
  padding-right: ${(props) => props.theme.sizes.padding};
  padding-left: ${(props) => props.theme.sizes.padding};
`;

const BoxShadow = css`
  box-shadow: 0 0 5px #00000035;
`;

export { Padding, BoxShadow };
