import React from 'react';
import styled from '@emotion/styled';
import config from 'config';
import ContentTree from './contentTree';
import Links from './links';
import PoweredBy from './poweredBy';
import { getNavigationData } from '../Navigation';
import { scrollbar } from '../../styles';
import { onMobile } from '../../styles/responsive';

const Sidebar = styled(({ className, children }) => (
  <div className={`${className} ${"Sidebar"}`}>
    {children}
  </div>
))`
  margin-left: ${(props) => props.theme.layout.leftMargin};
  height: 100%;
  display: flex;
  overflow-y: hidden;
  align-items: stretch;
  flex-direction: column;
  ${onMobile} {
    margin-left: 10px;
  }
`;

const SidebarMain = styled(({ className, children }) => (
  <div className={`${className} ${"SidebarMain"}`}>
    {children}
  </div>
))`
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  margin: 0;
  display: block;
  padding: 0;
  padding-top: 0;
  padding-bottom: 60px;
  -webkit-overflow-scrolling: hidden;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 0 !important;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.navigationSidebar.border} !important;
    border-radius: 0 !important;
  }
  &::-webkit-scrollbar-button {
    background: #666;
    height: 15px;
    border-radius: 0 !important%;
  }
  &:hover,
  &:focus {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const PoweredByWrapper = styled.div`
  display: block;
  padding: 0;
  position: relative;
  box-shadow: 0 -7px 10px -5px ${(props) => props.theme.navigationSidebar.backgroundPrimary};
`;

const NavigationWrapper = styled(({ className, children }) => (
  <aside className={className}>
    <Sidebar>{children}</Sidebar>
  </aside>
))`
  display: ${(props) => props.show ? 'block' : 'none'};
  height: calc(100vh - 80px);
  top: 0;
  flex: 0 0 ${(props) => props.theme.layout.leftWidth};
  background: ${(props) => props.theme.navigationSidebar.backgroundPrimary};
  background: linear-gradient(
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* Safari 4-5, Chrome 1-9 */
  background: linear-gradient(
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(${(props) => props.theme.navigationSidebar.backgroundPrimary}),
    to(${(props) => props.theme.navigationSidebar.backgroundSecondary})
  );
  /* Safari 5.1, Chrome 10+ */
  background: -webkit-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* Firefox 3.6+ */
  background: -moz-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* IE 10 */
  background: -ms-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  /* Opera 11.10+ */
  background: -o-linear-gradient(
    top,
    ${(props) => props.theme.navigationSidebar.backgroundPrimary},
    ${(props) => props.theme.navigationSidebar.backgroundSecondary}
  );
  border-right: 0px solid ${(props) => props.theme.navigationSidebar.border};
  position: fixed;
  top: 76px;
  width: 318px;
  left: 0;
  z-index: 1;
  ${onMobile} {
    width: 100%;
    top: 0;
    height: auto;
    border-right: none;
    position: relative;
    background: ${(props) => props.theme.navigationSidebar.backgroundPrimary};
  }
`;

const Divider = styled((props) => (
  <div {...props}>
    <hr />
  </div>
))`
  padding: 0.5rem 0;
  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.navigationSidebar.border};
  }
`;
const ContentNavigation = ({ show, className, location }) => {
  const edges = getNavigationData();
  return (
    <NavigationWrapper className={className} show={show}>
      <SidebarMain css={scrollbar}>
        <ContentTree edges={edges} location={location} />
        {config.sidebar.links && config.sidebar.links.length > 0 ? (
          <>
            <Links links={config.sidebar.links} />
          </>
        ) : null}
      </SidebarMain>
      {config.sidebar.poweredBy && config.sidebar.poweredBy.name ? (
        <>
          <PoweredByWrapper>
            <PoweredBy
              trademark={config.sidebar.poweredBy.trademark}
              name={config.sidebar.poweredBy.name}
              link={config.sidebar.poweredBy.link}
            />
          </PoweredByWrapper>
        </>
      ) : null}
    </NavigationWrapper>
  );
};

export default ContentNavigation;
