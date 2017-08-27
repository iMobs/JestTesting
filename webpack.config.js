const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');
const DST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './client/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(DST_DIR, 'js'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
    ],
  },
};
