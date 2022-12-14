module.exports = {
  siteMetadata: {
    title: `Vhealth - Open source gatsby template`,
    description: `Free website template for a health care startup.`,
    author: `Shantanu Deshmukj`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
	`gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#05020C`,
        theme_color: `#05020C`,
        display: `minimal-ui`,
        icon: `src/images/vhealth-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`, // este plugin no necesita configuración
    {
      resolve: `gatsby-source-filesystem`, // este sí
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // este sí
      options: {
        path: `${__dirname}/content/personajes`,
        name: `personajes`,
      },
    }
  ],
}
