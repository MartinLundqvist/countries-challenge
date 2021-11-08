import styled from 'styled-components';

interface IResponsiveProps {
  responsive?: boolean;
}

const Title = styled.h5`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TitleBig = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Property = styled.span<IResponsiveProps>`
  font-size: ${(props) =>
    props.responsive ? props.theme.sizes.bodyFontSize : '0.7rem'};
  font-weight: 600;
`;

const Value = styled.span<IResponsiveProps>`
  font-size: ${(props) =>
    props.responsive ? props.theme.sizes.bodyFontSize : '0.7rem'};
  font-weight: 300;
`;

export { Title, TitleBig, Property, Value };
