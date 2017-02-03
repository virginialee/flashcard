var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

// Karma configuration
module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    files: [
      // all files ending in "_test"
      {pattern: 'app/js/*_test.js', watched: false},
      {pattern: 'app/js/**/*_test.js', watched: false}
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/js/*_test.js': ['webpack'],
      'app/js/**/*_test.js': ['webpack']
    },

    webpack: webpackConfig,
    // webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    // },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
