const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'production';
const enabledSourceMap = mode === 'development';

module.exports = {
  mode: mode,
  entry: {
    "bundle": "./src/js/index.js",
    "bundle": "./src/scss/style.scss",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
