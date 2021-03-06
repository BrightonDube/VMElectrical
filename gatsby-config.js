/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path");

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`limelight`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`400`, `700`],
            },
            {
              family: `Roboto`,
              subsets: [`latin`],
            },
            {
              family: `Kaushan Script`,
              variants: [`400`],
            },
          ],
        },
      },
    },
  ],
  siteMetadata: {
    title: `IME 96 Solutions`,
    siteUrl: `https://www.ime96solutions.co.za`,
    description: `For all electrical installations`,
  },
};
