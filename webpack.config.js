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
        use: ["style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Run",
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html" //va usar el path del output
    }),
  ]
};