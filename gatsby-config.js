module.exports = {
  siteMetadata: {
    title: `Phuc Dang's Blog`,
    name: `Phuc Dang's Blog`,
    siteUrl: `https://novela.narative.co`,
    description: `This is blog about Information Technology, Software Engineer's life,...`,
    hero: {
      heading: `Welcome to Phuc's blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/phucdph`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@phucdph`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/phucdph/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/phuc.hoang.27`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phuc Dang's Blog`,
        short_name: `Phuc's Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
