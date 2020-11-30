require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    name: 'BumHub',
    description: 'A #SillySiteChallgen by @PaulieScanlon',
    keywords: ['bums', 'silly', 'gatsby'],
    siteUrl: 'https://bumhub.netlify.app/',
    ogImage: 'bumhub-og-image.jpg',
    lang: 'eng',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-10',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`ruda\:500,700,900`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layout/mdx-layout.tsx'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
