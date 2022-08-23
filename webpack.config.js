const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/img/favicon.png",
      template: "./src/index.html",
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
