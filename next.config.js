const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');
module.exports = withCss(withTypescript({
  webpack(config, options) {
    return config;
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
}));
