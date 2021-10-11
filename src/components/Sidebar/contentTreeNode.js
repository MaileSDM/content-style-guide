import { css } from '@emotion/core';
import styled from '@emotion/styled';
import config from 'config';
import { useTheme } from 'emotion-theming';
import React from 'react';
import { Link } from '../';
import ClosedSvg from '../../images/closed';
import OpenedSvg from '../../images/opened';
import emoji from '../../utils/emoji';

// If you want to have a css call based on props, create a function that returns a css call like this
// let dynamicStyle = (props) => css`color: ${props.color}`
// It can be called directly with props or interpolated in a styled call like this
// let SomeComponent = styled('div')`${dynamicStyle}`

const activeNode = (theme) => css`
  border: 1px solid ${theme.navigationSidebar.row.activeBorder};
  border-right: none;
  > a,
  button {
    background-color: ${theme.navigationSidebar.row.activeBGColor} !important;
    color: #E0F7FF !important;
    opacity: 1 !important;
  }
`;

const ContentLink = styled(({ className, link, children }) => (
  <Link to={link} className={className}>
    {children}
  </Link>
))`
  color: ${(props) => props.theme.navigationSidebar.font.base};
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 4px 24px 4px 10px;
  border-radius: 1px;
`;

const NodeContent = styled(({ className, active, text, link, children }) => (
  <li className={`${className} ${"ContentTreeNode"} ${"activeNodeContent-"}${active}`}>
    {text && <ContentLink link={link}>{text}</ContentLink>}
    {children}
  </li>
))`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-between;
  > a,
  > button {
    transition: ${(props) => props.theme.transitions.hover};
  }
  &:hover {
    > a,
    > button {
      background-color: ${(props) => props.theme.navigationSidebar.row.hover};
    }
  }
`;

const NestedContentTreeNode = styled(
  ({ className, location, children, setCollapsed, collapsed, depth }) => (
  <ul className={`${className} NestedContentTreeNode`} depth={depth}>
    {children.map((item) => (
      <ContentTreeNode
        {...item}
        key={item.url}
        depth={depth}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        location={location}
      />
    ))}
  </ul>
))`
  flex: 100%;
  margin-left:8px;
  li {
    margin-left: 8px;
    border-left: 1px solid ${(props) => props.theme.navigationSidebar.font.nested};
    a {
      color: ${(props) => props.theme.navigationSidebar.font.nested};
    }
  }
  ul {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid ${(props) => props.theme.navigationSidebar.font.nested};
    li {
      margin-left: 8px;
    }
  }
`;

const NodeCollapseButton = styled(({ className, isCollapsed, collapse }) => (
  <button onClick={(e) => {
    e.stopPropagation()
    collapse()
    }} aria-label="collapse" className={className}>
    {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
  </button>
))`
  background: transparent;
  border: none;
  outline: none;
  z-index: 10;
  cursor: pointer;
  padding: 0 25px 0 10px;
  svg path {
    fill: ${(props) => props.theme.navigationSidebar.font.base};
  }
  &:hover {
    svg path {
      fill: ${(props) => props.theme.navigationSidebar.row.collapseHover};
    }
  }
`;

const ContentTreeNode = ({ className, setCollapsed, collapsed, url, title, navTitle, location, depth, children }) => {
  const hasChildren = children.length !== 0;
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === url + '/' ||
      location.pathname === config.metadata.pathPrefix + url);

  const theme = useTheme();
  const isActivePath = location &&
      (location.pathname.substring(0, url.length) !== url &&
        location.pathname.substring(0, `${config.metadata.pathPrefix}${url}`.length) !== `${config.metadata.pathPrefix}${url}`
      );
  const isCollapsed = url in collapsed ? collapsed[url]: isActivePath;
  const text = emoji.emojify(navTitle);

  return (
    <>
      <NodeContent
        active={active}
        text={text}
        link={url}
        depth={depth}
        className={className}
        css={active ? activeNode(theme) : ''}
      >
        {title && hasChildren ? (
          <>
            <NodeCollapseButton isCollapsed={isCollapsed} collapse={() => setCollapsed({[url]: !isCollapsed})} />
          </>
        ) : null}
      </NodeContent>

      {!isCollapsed ? (
        <NestedContentTreeNode collapsed={collapsed} location={location} setCollapsed={setCollapsed} depth={(depth + 1)}>
          {children}
        </NestedContentTreeNode>
      ) : null}
    </>
  );
};
export default ContentTreeNode;
