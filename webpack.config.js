// const webpack = require('webpack');
// const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Weather: 'src/components/Weather.jsx',
      WeatherForm: 'src/components/WeatherForm.jsx',
      WeatherMessage: 'src/components/WeatherMessage.jsx',
      About: 'src/components/About.jsx',
      Examples: 'src/components/Examples.jsx',
      openWeatherMap: 'src/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  // devServer: {
  //   inline: true;
  //   contentBase: './build',
  //   port: 3000
  // },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      // code for webpack v2.1.0-beta23 and above
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'eslint'
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit2000'
      // },
      // {
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader!sass-loader'
      // }
    ]
  },
  devtool: 'source-map'
}
