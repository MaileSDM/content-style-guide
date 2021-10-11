import styled from '@emotion/styled';
import React from 'react';
import emoji from '../../utils/emoji';
import ContentTreeNode from './contentTreeNode';

const ContentTreeGroup = styled(({ className, treeState, title, icon, location, children }) => {
  const emojified = emoji.emojify(title);
  return (
    <div className={`${className} ${"ContentTreeGroup"}`} content={`${emojified}`}>
      {title ? (
        <>
          <span>
            {icon ? <img src={icon} alt={`group ${emojified}`} loading={'lazy'} /> : null}{' '}
            {emojified}
          </span>
        </>
      ) : null}
      <ul>
        {children.map((child) => (
          <ContentTreeNode
            {...child}
            key={child.url}
            setCollapsed={(state) => treeState.setCollapsed({
              ...treeState.collapsed,
              ...state,
            })}
            depth={0}
            collapsed={treeState.collapsed}
            location={location}
          />
        ))}
      </ul>
    </div>

    // {...item}
  );
})`
  display: block;
  padding: 0;
  position: relative;
  margin-bottom: 24px;
  border-color: ${(props) => props.theme.navigationSidebar.border};
  span {
    padding: 5px 16px 5px 10px;
    font-size: 13px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    position: relative;
    color: ${(props) => props.theme.navigationSidebar.font.group};
  }
  > span {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    img {
      width: 18px;
      margin-right: 7px;
    }
  }
`;

export default ContentTreeGroup;
