const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.stylus$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'resolve-url-loader',
          'stylus-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                './src/assets/css/*.styl',
                './src/assets/css/*.css'
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src/static'),
    open: false,
    hot: true,
    watchContentBase: true,
    historyApiFallback: {
      index: '/'
    }
  }
});
