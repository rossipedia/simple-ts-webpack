const path = require('path');
exports.default = {
  entry: './dist/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
};
