const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: __dirname + "/src",
    entry: {
      javascript: "./app.js",
       html: "./index.html",
       css: "./style.css", 
    },
    output: {
       path: __dirname + "/build",
       filename: "bundle.js",
    },
    module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  }
}

