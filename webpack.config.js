const path = require('path');
const babelConfig = require('./babel.config.json');
const env = process.env.NODE_ENV || 'production';
const isProduction = env === 'production';
const mode = isProduction ? 'production' : 'development';

module.exports = {
  mode,
  entry: './src/server/index.tsx',
  target: 'node',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist1')
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /(node_modules|pubilc)/,
        use: ['babel-loader', 'tsc-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx']
  },
};
