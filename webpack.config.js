const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  // Eslint官網新的用法
  plugins: [new ESLintPlugin({ extensions: ['.js', '.jsx'] })],
  // 告訴webpack，所有js的code都從這裡丟給webpack
  entry: './src/index.js',
  // 告訴webpack，他處理好的檔案要丟去哪邊
  // 配合index.html要把這個丟出來的檔案載入
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // 裡面放loader
  module: {
    rules: [
      {
        // 過濾的條件是.js或是.jsx，這是regex語法
        test: /\.(js|jsx)$/,
        // 不需要過濾的是node_modules，這也是regex語法
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  // 用來讓webpack處理import和export的檔案條件
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // 用來設定development環境下，用來放預覽網頁的server
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
};
