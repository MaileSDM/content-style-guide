import React from 'react';
import styled from '@emotion/styled';
import { onMobile, onTablet, onDesktop } from '../../styles/responsive';
import Link from '../Link';

const Navigation = styled(({ className, links }) => (
    <nav css={{display: 'flex'}}>
      <ul className={className}>
        {links
          ? links.map((link, key) => {
              const openRule = link.external ? '_blank' : '_self';
              if (link.link !== '' && link.text !== '') {
                if (link.link === "/docs" || link.link === "/") {
                  return (
                    <li key={key} className={"nav-homelink"}>
                      <a href={link.link} dangerouslySetInnerHTML={{ __html: link.text }}/>
                    </li>
                  );
                } else {
                  return (
                    <li key={key}>
                      <Link to={link.link} dangerouslySetInnerHTML={{ __html: link.text }}/>
                    </li>
                  );
                }
              }
            })
          : null}
      </ul>
    </nav>
))`
  display: flex;
  align-items: center;
  width:80%;
  padding-right:0;
  justify-content: space-between;
  -webkit-overflow-scrolling: touch;
  ${onMobile} {
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      height: 37px;

      a {
        font-size: 16px;
        padding: 10px 15px;
      }
    }
  }
  .nav-homelink a {
    opacity:0.5;
    br {
      display:none;
    }
    ${onTablet} {
      font-size:0.9em;
      br {
        display:block;
      }
    }
  }
  li {
    list-style-type: none;
    display: flex;
    white-space:nowrap;
    & > a:before {
      display: none;
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: ${(props) => props.theme.header.font.hover};
      visibility: hidden;
      border-radius: 4px;
      transform: scaleX(0);
      transition: 0.25s linear;
    }
    & > a:focus:before,
    & > a:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
    a {
      position: relative;
      color: ${(props) => props.theme.header.font.base};
      font-size: 17px;
      font-weight: 500;
      line-height: 1em;
      opacity: 1;
      padding: 10px 15px;
      &:hover {
        color: ${(props) => props.theme.header.font.hover};
      }
    }
  }
`;

export default Navigation;
