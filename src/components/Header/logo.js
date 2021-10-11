// import Link from "../Link";
import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { onMobile, onTablet, onDesktop } from '../../styles/responsive';

const logoStyle = (theme) => css`
  padding: 0 0;
  display: flex;
  align-items: center;
  ${onMobile} {
    min-height: 40px;
  }

  span {
    height: auto;
    font-size: 26px;
    line-height: 1.5;
    color: ${theme.header.font.base};
    ${onTablet} {
      font-size: 21px;
    }
    ${onMobile} {
      font-size: 19px;
      flex: initial;
      padding: 0 15px 0 0;
    }
    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }
`;

const LogoWrapper = styled(({ className, children }) => (
  <div className={`${className} ${"LogoWrapper"}`}>
    {children}
  </div>
))`
  display: flex;
  margin-left: 30px;
  ${onTablet} {
    margin-left: ${(props) => props.theme.layout.leftMargin};
    margin-right: -${(props) => props.theme.layout.leftMargin};
  }
  ${onMobile} {
    margin-left: 10px;
  }

  a:nth-of-type(1) img {
    width: 133px;
    margin-right: 6px;
    display: inline-block;
    ${onTablet} {
      width: 120px;
    }
    ${onMobile} {
      margin-right: 8px;
      width: 107px;
    }
  }
  a:nth-of-type(2) img {
    width: 82px;
    margin-right: 16px;
    display: inline-block;
    ${onTablet} {
      width: 74px;
    }
    ${onMobile} {
      margin-right: 8px;
      width: 66px;
    }
  }

`;

const Logo = styled(({ className, link, img, title, link2, img2}) => {
  const theme = useTheme();
  let split = title.split(' ');
  split[0] = '<strong>' + split[0];
  const last = split.length < 3 ? 0 : split.length - 2;
  split[last] = split[last] + '</strong>';
  const titleB = split.join(' ');

  return (
    <div className={className}>
      <LogoWrapper>
        <a href={link} css={logoStyle(theme)}>
          <img css={{display: 'inline-block'}} src={img} alt={'logo'} loading={'lazy'} />
        </a>
        <Link to={link2} css={logoStyle(theme)}>
          <img css={{display: 'inline-block'}} src={img2} alt={'docs'} loading={'lazy'} />
        </Link>
      </LogoWrapper>
    </div>
  );
})`
  min-width: ${(props) => props.theme.layout.leftWidth};
  display: flex;
  align-items: center;
  /* border-right: 1px solid ${(props) => props.theme.header.border}; */
  ${onTablet} {
    min-width: calc(${(props) => props.theme.layout.leftWidth} - 10px);
  }
  ${onMobile} {
    border-right: none;
    min-width: auto;
    padding-right: 0;
  },
  img {
    filter: ${(props) => props.theme.header.invertImage};
  }
`;

export default Logo;
