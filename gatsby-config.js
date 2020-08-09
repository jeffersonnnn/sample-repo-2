module.exports = {
  siteMetadata: {
    siteTitle: `Remita Developer Documentation`,
    defaultTitle: `Remita Developer Documentation`,
    siteTitleShort: `Remita Developer Documentation`,
    siteDescription: `Welcome to the Remita Developer Documentation where you’ll learn how to build amazing payment experiences with the Remita API.`,
    siteUrl: `https://remita.net`,
    siteAuthor: `Remita`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#C25325`,
    basePath: `/`,
    footer: `Write your apps, faster, with Remita.`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/jeffersonnnn/sample-repo-2`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://remita.com/developers`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
