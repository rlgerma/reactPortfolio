module.exports = {
  siteMetadata: {
    title: 'Richard Germaine Official Website',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // Override the file regex for SASS
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
        useResolveUrlLoader: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: `${__dirname}/src/assets/images/portfolio`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logos',
        path: `${__dirname}/src/assets/images/logos`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Richard Germaine',
        short_name: 'rgermaine.com',
        start_url: '/',
        background_color: '#037F8C',
        theme_color: '#037F8C',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
};
