const path = require("path");
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
  }
};