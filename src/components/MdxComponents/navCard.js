import React from 'react';
import styled from '@emotion/styled';
import Icon from './icon';
import emoji from '../../utils/emoji';
import Link from '../Link';
import Card from './card';
import { onMobile, onTablet } from '../../styles/responsive';

const NavLink = styled(Link)`
  display: flex;
  margin-bottom:0 !important;
`;

const NavCard = styled(Card)`
  cursor: pointer;
  position: relative;
  top: 0;
  flex-grow: 1;
  flex-direction: row;
  align-items: flex-start;
  min-width:250px;
  background-color:#F0F2F4;
  border:0;
  border-top:20px solid ${props => props.color};
  border-radius:0;
  color:black;
  box-shadow:0 15px 20px rgba(0,0,0,0.2);
  &:hover {
    top: -2px;
    background-color: white;
    box-shadow:0 25px 25px rgba(0,0,0,0.2);
  }
`;

const Titles = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 5px;
  line-height:1.3;
`;

const Title = styled.div`
  padding: 0 14px;
  font-size: 1.2em;
  font-weight: 600;
  font-family: SDMontserrat, sans-serif;
  flex: 1;
  ${onTablet} {
    font-size:1.1em;
  }
  ${onMobile} {
    font-size:1em;
  }
`;

const Text = styled.div`
  padding: 10px 14px;
  font-size: 0.8em;
  font-weight: 300;
  flex: 1;
`;

const NavIcon = styled.div`
  ${onTablet} {
    display:none;
  }
  ${onMobile} {
    display:none;
  }
`;

export default ({ url, title, caption, icon, color }) => {
  return (
    <NavLink to={url}>
      <NavCard color={color}>
        <NavIcon>
          <Icon name={`${icon}`} color={color} size={40} />
        </NavIcon>
        <Titles>
          <Title>{emoji.emojify(title)}</Title>
          <Text>{emoji.emojify(caption)}</Text>
        </Titles>
      </NavCard>
    </NavLink>
  );
};
