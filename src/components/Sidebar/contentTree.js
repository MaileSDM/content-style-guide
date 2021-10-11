import React, { useEffect, useState } from 'react';
import { calculateNavigation } from '../';
import ContentTreeGroup from './contentTreeGroup';

const ContentTree = ({ edges, location }) => {
  const [treeData] = useState(() => calculateNavigation(edges));
  const [collapsed, setCollapsed] = useState({});

  useEffect(() => {
    setCollapsed({})
  }, [location.pathname])

  return (
    <>
      {treeData.children.map((group, index) => {
        const key = group.path ? group.path : `node-${index}`;
        return (
          <ContentTreeGroup
            treeState={{ collapsed, setCollapsed }}
            key={key}
            location={location}
            {...group}
          />
        );
      })}
    </>
  );
};

export default ContentTree;
