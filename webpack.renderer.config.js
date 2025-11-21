const rules = require('./webpack.rules');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules,
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',  // ensure scripts insert correctly
      meta: {
        'csp': {
          'http-equiv': 'Content-Security-Policy',
          content: [
            "default-src 'self' data: 'unsafe-inline';",
            "img-src 'self' data:;",
            "style-src 'self' 'unsafe-inline';",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
            "connect-src 'self' http://localhost:8080;",
          ].join(' ')
        }
      }
    })
  ]
};
