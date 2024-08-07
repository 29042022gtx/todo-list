const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      // minify: false,
      // inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: [
      './src/*.html',
      // './webpack.config.js'
    ],
    client: {
      logging: 'warn',
    },
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};