var path = require('path'); // node.js에서 가져온 common.js path 라이브러리

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};