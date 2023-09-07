/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path')
const config = require("./config/site")


module.exports = {
  siteMetadata: {
    title: `Via Del Web Website Design + Development & Digital Marketing`,
    description: `Digital Marketing and Website Design`,
    siteUrl: `https://viadelweb.com/`,
    ...config,
  },
  flags: {
    DEV_SSR: true,    
  },

  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-brotli',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
//    {
//      resolve: `gatsby-source-filesystem`,
//        options: {
//          name: `pages`,
//          path: `${__dirname}/content/pages`,
//        },
//    },
//    {
//      resolve: `gatsby-source-filesystem`,
//        options: {
//          name: `data`,
//          path: `${__dirname}/src/data`,
//          ignore: [`**/\.*`], // ignore files starting with a dot
//          fastHash: true,           // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
//        },
//    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, ''),
        '@': path.join(__dirname, 'src'),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Via Del Web Web Design+Development & Digital Marketing`,
        short_name: `Via Del Web`,
        start_url: `/`,
        background_color: `#217ebd`,
        theme_color: `#217ebd`,
        display: `minimal-ui`,
        icon: `src/images/logo-only.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
