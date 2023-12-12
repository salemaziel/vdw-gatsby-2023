/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
//require("dotenv").config({
//  path: `.env.${process.env.NODE_ENV}`,
// })

const path = require('path')
const config = require("./config/site")


module.exports = {
  siteMetadata: {
    title: `Via Del Web Website Design + Development & Digital Marketing`,
    description: `Digital Marketing and Website Design`,
    siteUrl: `https://viadelweb.com`,
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
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://analytics.viadelweb.cloud",
        siteUrl: "https://viadelweb.com",
        // All the optional settings
        matomoPhpScript: "piwik.php",
        matomoJsScript: "matomo.js",
        exclude: ["/offline-plugin-app-shell-fallback/"],
        requireConsent: true,
        disableCookies: false,
        cookieDomain: "*.viadelweb.com",
//        localScript: "/piwik.js",
        dev: false,
        enableJSErrorTracking: true,
        trackLoad: true,

      },
    },
    //{
      //resolve: `gatsby-plugin-google-gtag`,
      //options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        //trackingIds: [
          //"process.env.GA_UA_ID", // Google Analytics / GA
          //"process.env.GA_ID", // Google Analytics / GTag
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        //],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //gtagConfig: {
          //optimize_id: "OPT_CONTAINER_ID",
          //anonymize_ip: true,
          //cookie_expires: 0,
        //},
        // This object is used for configuration specific to this plugin
        //pluginConfig: {
          // Puts tracking script in the head instead of the body
          //head: false,
          // Setting this parameter is also optional
          //respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          //origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          //delayOnRouteUpdate: 0,
        //},
     // },
    //},
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
  //partytownProxiedURLs: [`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_ID}`]
}
