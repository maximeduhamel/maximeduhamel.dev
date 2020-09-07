module.exports = {
  siteMetadata: {
    title: `Maxime Duhamel | Web Design & Development`,
    description: `Je vous construis un site web sur mesure qui marche`,
    siteUrl: `https://maximeduhamel.dev`,
    author: `Maxime Duhamel`,
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
}
