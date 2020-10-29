const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
        {
          loader: 'style-loader'
        }, {
	        loader: 'css-loader',
	      }, {
	        loader: 'resolve-url-loader',
	      }, {
	        loader: 'sass-loader',
	        options: {
	          sourceMap: true,
	        }
	      }
    	]
      },
       {
          test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
          use: [
           'file-loader'
          ]
       }
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'assets/index.html'
    }),
     new CopyWebpackPlugin({
       patterns: [
        { from: 'assets/robots.txt' },
        { from: 'assets/apple-touch-icon.png' },
        { from: 'assets/favicon.ico' },
     ]}),
  ]
};