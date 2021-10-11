// 08:46
require('dotenv').config();
const { getSearchPlugins } = require('./src/utils/search');
const configManager = require('./src/utils/config');
const path = require('path');
const emoji = require('./src/utils/emoji');
const _ = require('lodash');
const { truncate } = require('lodash');

const config = configManager.read();
configManager.generate(__dirname + '/.generated.config.js', config);

const plugins = [
  'gatsby-plugin-loadable-components-ssr',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-instagram-embed',
  'gatsby-plugin-pinterest',
  'gatsby-plugin-twitter',
  'gatsby-plugin-sharp',
  'gatsby-plugin-sass',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.js`),
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-trailing-slashes',
  {
    resolve: require.resolve(`./plugins/gatsby-plugin-draft`),
    options: {
      publishDraft: config.features.publishDraft,
    },
  },
  'gatsby-plugin-hidden',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
      },
    },
  },
  'gatsby-plugin-react-helmet',
  'gatsby-source-local-git',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: `gatsby-transformer-gitinfo`,
    options: {
      include: /\.mdx?$/i, // Only .md files
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      remarkPlugins: [require('remark-emoji'), require('remark-abbr'),
        require('remark-unwrap-images')
      ],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-mermaid',
          options: {
            language: config.features.mermaid.language,
            theme: config.features.mermaid.theme,
            viewport: {
              width: config.features.mermaid.width,
              height: config.features.mermaid.height,
            },
            mermaidOptions: config.features.mermaid.options,
          },
        },
        'gatsby-remark-graphviz',
        {
          resolve: require.resolve(`./plugins/gatsby-remark-sectionize-toc`),
          options: {
            maxDepth: config.features.toc.depth,
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1050,
            quality: 75,
            showCaptions: true,
            disableBgImageOnAlpha: true,
            withWebp: true,
          },
        },
        'gatsby-remark-copy-linked-files',
        {
          resolve: 'gatsby-remark-jargon',
          options: { jargon: require('./src/utils/jargon-config.js') },
        },
        {
          resolve: `gatsby-remark-embed-snippet`,
          options: {
            directory: `${__dirname}/snippets/`,
          },
        },
        {
          resolve: `gatsby-remark-embedder`,
          options: {
            customTransformers: [
              // Your custom transformers
            ],
            services: {
              // The service-specific options by the name of the service
            },
          },
        },
      ],
      extensions: ['.mdx', '.md'],
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.metadata.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: config.metadata.gtmId,

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
     // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      //dataLayerName: "YOUR_DATA_LAYER_NAME",

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    },

  },
  {
    resolve: require.resolve('./plugins/gatsby-plugin-snowplow-sdmt')
  },
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '~': path.join(__dirname, 'src'),
      config: path.join(__dirname, '.generated.config.js'),
      images: path.join(__dirname, 'src/images'),
      styles: path.join(__dirname, 'src/styles'),
      css: path.join(__dirname, 'src/styles/main.scss'),
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: "https://www.strongdm.com/docs",
      stripQueryString: true,
    },
  },
  {
    resolve: `gatsby-plugin-intercom-spa`,
    options: {
      app_id: 'xce7gzlw',
      include_in_development: true,
      delay_timeout: 0
   },
  },
];

if (config.features.pageProgress && config.features.pageProgress.enabled) {
  plugins.push({
    resolve: 'gatsby-plugin-page-progress'
  });
}

if (config.features.rss && config.features.rss.enabled) {
  plugins.push({
    resolve: `gatsby-plugin-feed`,
    options: {
      ...config.features.rss,
      language: config.metadata.language,
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            const items = allMdx.edges.map((edge) => {
              const frontmatter = edge.node.frontmatter;
              const fields = edge.node.parent.fields;
              const rawTitle =
                frontmatter.metaTitle && frontmatter.metaTitle.length > 0
                  ? frontmatter.metaTitle
                  : frontmatter.title;
              const title = emoji.clean(rawTitle);
              const date = fields && fields.gitLogLatestDate ? fields.gitLogLatestDate : new Date();
              const author =
                fields && fields.gitLogLatestAuthorName ? fields.gitLogLatestAuthorName : 'unknown';
              return {
                title: title,
                description: frontmatter.description ? frontmatter.description : edge.node.excerpt,
                date: date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                author: author,
              };
            });
            return _.orderBy(items, ['date', 'title'], ['desc', 'asc']);
          },
          query: `
          {
            allMdx(filter: {fields: {draft: {ne: true}}}) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  parent {
                    ... on File {
                      fields {
                        gitLogLatestDate
                        gitLogLatestAuthorName
                      }
                    }
                  }
                  frontmatter {
                    title
                    metaTitle
                    description
                  }
                }
              }
            }
          }
          `,
          output: config.features.rss.outputPath,
          match: config.features.rss.matchRegex,
          title: config.features.rss.title ? config.features.rss.title : config.metadata.title,
        },
      ],
    },
  });
}

const searchPlugins = getSearchPlugins(config.features.search);
searchPlugins.forEach(plugin => plugins.push(plugin));

// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: { ...config.pwa.manifest },
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  });
  // plugins.push('gatsby-plugin-offline');
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

module.exports = {
  pathPrefix: config.metadata.pathPrefix,
  // assetPrefix: config.metadata.assetPrefix,
  siteMetadata: {
    title: config.metadata.name,
    description: config.metadata.description,
    docsLocation: config.features.editOnRepo.location,
    docsLocationType: config.features.editOnRepo.type,
    editable: config.features.editOnRepo.editable,
    siteImage: config.metadata.siteImage,
    favicon: config.metadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo,
      link2: config.header.logoLink2 ? config.header.logoLink2 : '/',
      image2: config.header.logo2,
    }, // backwards compatible
    headerTitle: config.metadata.name,
    helpUrl: config.header.helpUrl,
    headerLinks: config.header.links,
    siteUrl: "https://www.strongdm.com",
  },
  plugins: plugins,
};
