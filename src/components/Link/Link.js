import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const Link = ({ to, ...props }) => {

  //const cleanto = (to.startsWith("/") && !to.startsWith("/docs") && to !== "/") ? "/docs" + to : to;

  const cleanto = (to.startsWith("/docs/") ? to.replace("/docs/","/") : to);

  props.cleanto = cleanto;

  return (
    isAbsoluteUrl(cleanto) ?
      <a
        href={cleanto}
        cleaned={cleanto}
        {...props}
        target={props.target ? props.target : '_blank'}
        rel={props.rel ? props.rel : 'noopener noreferrer'}
      >
        {props.children}
      </a>
     :
      <GatsbyLink to={cleanto} {...props} />
    );
};

export default Link;
