const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    NEWS_API_KEY: process.env.NEWS_API_KEY
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  }
};
