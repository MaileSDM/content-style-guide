const React = require("react")
const { PropTypes } = require('prop-types');

const SnowplowJS = ({scriptUrl}) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
        n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","${scriptUrl}","sdmt"));`,
    }}
  />
);

SnowplowJS.propTypes = { scriptUrl: PropTypes.string };
SnowplowJS.defaultProps = { scriptUrl: 'https://www.strongdm.com/docs/js/sdmt.js' };

const SnowplowInit = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        function getDomain(fromUrl) {
          var url = fromUrl
          url = url.replace(/(https?:\\/\\/)?(www.)?/i, '');
          url = url.split('.');
          url = url.slice(url.length - 2).join('.');
          if (url.indexOf('/') !== -1) {
              return url.split('/')[0];
          }
          return url;
        }
        function isLocal(domain) {
          return domain.toLowerCase().startsWith('localhost')
        }
        function getCollectorUrl(domain) {
          if(isLocal(domain)) {
            return "localhost:9090"
          }
          return "app." + domain + "/sdmt"
        }
        currentDomain = getDomain(window.location.origin)
        collectorUrl = getCollectorUrl(currentDomain)

        window.sdmt('newTracker', 'sdmt1', collectorUrl, { 
          appId: 'sdm_web_docs_browser',
          platform: "web",
          postPath: "/_s/t",
          discoverRootDomain: true,
          cookieName: "sdmt",
          forceSecureTracker: !isLocal(currentDomain),
          cookieSecure: true,
          contexts: {
            webPage: true,
            gaCookies: true
          }
        });
        window.sdmt('enableActivityTracking', 15, 10);
        window.sdmt('enableLinkClickTracking');
      `,
    }}
  />
);

export const onRenderBody = ({ setHeadComponents }, {}) => {
  return setHeadComponents([
    <SnowplowJS key="gatsby-plugin-snowplow-sdmt-jsfile" />,
    <SnowplowInit
      key="gatsby-plugin-snowplow-sdmt-init"
    />,
  ]);
};
