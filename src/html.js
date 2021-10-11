import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import { scrollbar } from './styles';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {config.metadata.ogImage ? (
            <meta property="og:image" content={config.metadata.ogImage} />
          ) : null}
          <meta property="twitter:card" content="summary_large_image" />
          {config.metadata.ogImage ? (
            <meta property="twitter:image" content={config.metadata.ogImage} />
          ) : null}
          {config.metadata.favicon ? (
            <link rel="shortcut icon" type="image/svg" href={config.metadata.favicon} />
          ) : null}
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
        </head>
        <body css={scrollbar} {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.onIntercomLoad = (callback, interval = 250, maxWaitDuration = 5000) => {
                  const appInterval = setInterval(() => {
                    if (!window.Intercom) return;
                    clearInterval(appInterval);
                    callback();
                  }, interval);
                  setTimeout(() => clearInterval(appInterval), maxWaitDuration);
                }
                if (window.location.search.indexOf("openChat=true") > -1) {
                  onIntercomLoad(() => {
                    Intercom('show');
                  });
                }

                window.onActiveNodeContentLoad = (callback, interval = 250, maxWaitDuration = 5000) => {
                  const ANCInterval = setInterval(() => {
                    if (!document.querySelector(".activeNodeContent-true")) return;
                    clearInterval(ANCInterval);
                    callback();
                  }, interval);
                  setTimeout(() => clearInterval(ANCInterval), maxWaitDuration);
                }
                onActiveNodeContentLoad(() => {
                  document.querySelector(".activeNodeContent-true").scrollIntoView();
                  document.querySelector(".SidebarMain").scrollTop -= 100;
                });

                if (window.location.href.indexOf('deploy-preview') > -1) {
                  const handleDP = () => {
                    var allImages = document.getElementsByTagName('img');
                    for(var i = 0; i < allImages.length ; i++) {
                      allImages[i].src = allImages[i].src.replace("/docs/","/");
                    }
                    var allLinks = document.getElementsByTagName('a');
                    for(var i = 0; i < allLinks.length ; i++) {
                      allLinks[i].href = allLinks[i].href.replace("/docs/","/");
                    }
                    setTimeout(handleDP,750);
                  }
                  handleDP();
                }

                /*
                window.onUsersnapCXLoad = function(api) {
                  api.init();
                }
                var script = document.createElement('script');
                script.defer = 1;
                script.src = 'https://widget.usersnap.com/global/load/41beb608-328c-4c62-b44d-85f038133137?onload=onUsersnapCXLoad';
                document.getElementsByTagName('head')[0].appendChild(script);
                */
              `,
            }}
          />

        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
