const path = require('path');

const _ = require('lodash');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve('./src');
const DIST_PATH = path.resolve('./dist');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env) => {
  env = Object.assign({ dev: false, prod: false }, env);

  const isDev = (yes, no) => env.dev ? yes : no;
  const isProd = (yes, no) => env.prod ? yes : no;

  const skipEmpty = (collection) => {
    if (Array.isArray(collection)) {
      return collection.filter(_.identity);
    }

    return _.omitBy(collection, _.isEmpty);
  };

  return {
    context: SRC_PATH,

    devtool: isDev('cheap-inline-module-source-map', false),

    devServer: isDev({
      historyApiFallback: true,
    }),

    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.scss',
      ],
    },

    entry: {
      app: skipEmpty([
        isDev('react-hot-loader/patch'),
        './app',
      ]),
    },

    output: {
      filename: isDev('[name].js', '[name]-[chunkhash].js'),
      path: DIST_PATH,
      publicPath: '/',
    },

    module: {
      rules: skipEmpty([
        {
          include: SRC_PATH,
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'react',
                  ['es2015', { modules: false }],
                ],
                plugins: skipEmpty([
                  isDev('react-hot-loader/babel'),
                  'transform-runtime',
                  'transform-object-rest-spread',
                  'transform-class-properties',
                ]),
              },
            },
          ],
        },

        isDev({
          include: SRC_PATH,
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),

        isProd({
          include: SRC_PATH,
          test: /\.scss/,
          use: ExtractTextPlugin.extract([
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              },
            },
          ]),
        }),
      ]),
    },

    plugins: skipEmpty([
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),

      isProd(new CleanPlugin(['dist'])),

      isProd(new ExtractTextPlugin('[name]-[contenthash].css')),

      new webpack.DefinePlugin({
        IS_DEV: env.dev,
        IS_PROD: env.prod,
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),

      new webpack.LoaderOptionsPlugin({
        debug: env.dev,
        minimize: env.prod,
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        minChunks: (module) => /node_modules/.test(module.userRequest),
      }),

      new HtmlPlugin({
        title: 'Food Service',
        filename: 'index.html',
        template: './templates/default.html',
        chunks: [
          'vendors',
          'app',
        ],
      }),

      isProd(new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourceMap: false,
        compress: {
          warnings: false,
          screw_ie8: true,
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
        },
        output: {
          comments: false,
        },
      })),
    ]),
  };
};
