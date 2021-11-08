import styled from 'styled-components';

const Title = styled.h5`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TitleBig = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Property = styled.span`
  font-size: ${(props) => props.theme.sizes.bodyFontSize};
  font-weight: 600;
`;

const Value = styled.span`
  font-size: ${(props) => props.theme.sizes.bodyFontSize};
  font-weight: 300;
`;

export { Title, TitleBig, Property, Value };
