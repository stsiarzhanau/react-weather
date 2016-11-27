const webpack = require('webpack');
// const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      // code for webpack v2.1.0-beta23 and above
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'eslint',
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit2000',
      // },
      // {
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader!sass-loader',
      // },
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    alias: {
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Weather: 'src/components/Weather.jsx',
      WeatherForm: 'src/components/WeatherForm.jsx',
      WeatherMessage: 'src/components/WeatherMessage.jsx',
      About: 'src/components/About.jsx',
      Examples: 'src/components/Examples.jsx',
      ErrorModal: 'src/components/ErrorModal.jsx',
      openWeatherMap: 'src/api/openWeatherMap.jsx',
      appStyles: 'src/styles/app.css',
    },
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    jquery: 'jQuery',
  },
  devtool: 'source-map',
  // devServer: {
  //   inline: true,
  //   contentBase: './build',
  //   port: 3000,
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
