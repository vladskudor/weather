const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './src/main.js'
   },
   plugins: [
     new HtmlWebpackPlugin({
      template: './src/index.html'
     }),
     new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, './src/assets/'),
            to:   path.resolve(__dirname, 'dist/src/assets')
          }
        ]
      })
   ],
   module: {
    rules: [
      {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }
   ]
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   }
 };