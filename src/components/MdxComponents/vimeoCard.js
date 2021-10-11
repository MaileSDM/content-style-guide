import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import Card from './card';
import { onMobile } from '../../styles/responsive';

const VimeoCard = styled(Card)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0;
  text-align:center;
  ${onMobile} {
    width: 100%;
    height: auto;
  }
  iframe {
    margin:0 auto;
  }
`;

const Text = styled.p`
font-style: italic;
text-align: center;
margin-top: 15px;
& > p:first-child {
    margin-top: 0;
}
& > p:last-child {
    margin-bottom: 0;
}
`;

export default ({ children, width, height, src}) => {
  const theme = useTheme();
  const imgWidth = width ? width : '50%';
  const imgHeight = width ? width : '50%';
  return (
      <VimeoCard width={imgWidth}>
        <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" frameborder="0" src={src} width="100%"></iframe>
        <Text>{children}</Text>
      </VimeoCard>
  );
};
