/**
 * If you are working in VS Code on Linux you might
 * run into this error:
 * "Error: ENOSPC: System limit for numb  er of file watchers reached"
 * 
 * To fix this, run following command in terminal:
 * echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
 */

module.exports = {
  siteMetadata: {
    title: `The HideOut Studio`,
    description: `Recording/video/photography studio in the heart of Aalborg, DK`,
    author: `Lasse Krarup <me@lassekrarup.com>`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    // Metadata https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/
    `gatsby-plugin-react-helmet`,

    // Source plugins. the "name" option translates to
    // sourceInstanceName parameter of file nodes in GraphQL
    { // Keep images first for gatsby-remark-images support
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img`,
      },
    },
    { // Keep images first for gatsby-remark-images support
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `srcImg`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    // IMAGE PLUGINS
    `gatsby-plugin-image`,

    // Sharp image plugin
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      }
    },
    `gatsby-transformer-sharp`,

    // TRANSFORMERS
    'gatsby-transformer-json',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Fixes relative paths in NetlifyCMS created image paths
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              exclude: ['bgvideo']
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              withWebp: {quality: 100},
              quality: 100
            },
          },
        ],
      },
    },

    // PWA manifest and Favicon stuff
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-hideout-studio`,
        short_name: `hideout`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/hideout-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    "gatsby-plugin-postcss",

    // NetlifyCMS - keep this last in the array
    `gatsby-plugin-netlify-cms`
  ],
}
