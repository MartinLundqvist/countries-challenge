import styled from 'styled-components';
import { Padding } from '../mixins/Mixins';

const Container = styled.div`
  position: relative;
  margin-top: ${(props) => props.theme.sizes.header};
  margin-bottom: ${(props) => props.theme.sizes.footer};
  ${Padding};
`;

export default Container;
