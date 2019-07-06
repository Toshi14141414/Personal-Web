require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Hanyu Xu`,
    titleTemplate: '%s',
    siteUrl: `https://www.xuhanyu.com`,
    description: `Hanyu Xu`,
    twitterUsername: `@_Alexhy`,
    instagram: 'https://www.instagram.com/alex_xhy/',
    github: 'https://github.com/Toshi14141414',
    linkedin: 'https://www.linkedin.com/in/hanyuxu/',
    weibo: 'https://www.weibo.com/sunmmerbegin',
    email: 'me@xuhanyu.com'
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify`
  ]
}
