const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // dev tool to see what its going on in bundle.js file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({     //le voy a poner atributos y opciones, y donde esta el fichero que voy a escribir
      title: "Webpack Run",
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html" //va usar el path del output
    }),
  ]
};