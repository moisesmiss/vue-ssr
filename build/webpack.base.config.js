const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production'
process.traceDeprecation = true

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: '[name].[ext]?[hash]',
          esModule: false,
        }
      },
      {
        test: /\.css$/,
        use: [
          isProd ? ExtractCssChunksPlugin.loader : 'vue-style-loader',
          'css-loader'
        ]
        ,
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? ExtractCssChunksPlugin.loader : 'vue-style-loader',
          'css-loader', 'sass-loader'
        ]
      },
    ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [new TerserPlugin({
      test: /\.js(\?.*)?$/i,
    })],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      },
    },
  },
  performance: {
    hints: false
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        new ExtractCssChunksPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].chunk.css',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new OptimizeCSSAssetsPlugin()
      ]
    : [
        new VueLoaderPlugin(),
        new FriendlyErrorsPlugin()
      ]
}
