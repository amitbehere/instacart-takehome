const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

const defaults = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        // css loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // sass loader
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // regex matches js and jsx
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        // Babel config comes from babel.config.json
        use: ['babel-loader'],
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
    ],
  },
  plugins: [
    // This injects our transpiled script into public/index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new ESLintPlugin(),
  ],
};

// exports separate configs for dev mode vs prod mode
module.exports = (env, argv) => {
  // spread defaults
  const modifications = {
    ...defaults,
    devServer: {
      hot: true,
      client: {
        overlay: {
          // only show error banner in development mode
          errors: argv.mode === 'development',
          warnings: false,
        },
      },
    },
  };
  if (argv.mode === 'development') {
    console.log('development webpack config is being used');
    return {
      ...modifications,
      // only add source map in dev
      devtool: 'eval-source-map',
    };
  }

  if (argv.mode === 'production') {
    console.log('production webpack config is being used');
    return {
      ...modifications,
      // add production specific config
    };
  }
  return modifications;
};
