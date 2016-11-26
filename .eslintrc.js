module.exports = {
  root: true,
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  },
  rules: {
  }
}
