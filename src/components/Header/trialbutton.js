import { ExternalLink } from 'react-feather';
import React from 'react';
import styled from '@emotion/styled';
import { flex, transparent } from '../../styles';
import config from 'config';

const TrialButton = styled(({ className }) => {
  return (
    <div className={`${className} ${"trialButton"}`}>
      <a href={`${config.header.trialButtonLink}`} target={'_blank'}>
        {`${config.header.trialButtonText}`}
      </a>
    </div>
  );
})`
  list-style: none;
  @media (max-width:550px) {
    display: none !important;
  }
  a {
    background-color: ${(props) => props.theme.colors.sdmBlue};
    border-radius: 100px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display:inline-block;
    font-family: SDMontserrat, sans-serif;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.035em;
    line-height: 24.9667px;
    margin-left: 10px;
    padding-bottom: 12px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 12px;
    text-rendering: optimizelegibility;
    white-space: nowrap;
    text-decoration: none;
    &:hover {
      background-color: ${(props) => props.theme.colors.sdmBlueHover};
    }
  }
`;

export default TrialButton;
