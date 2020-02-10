const path = require('path');
const withSass = require('@zeit/next-sass');

require('dotenv').config();

module.exports = withSass({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    NEWS_API_KEY: process.env.NEWS_API_KEY
  },
  // cssModules: true,
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  }
});
