const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
         loader: "babel-loader"
        }
      },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  },
  {
  // To Support Import Styles as Modules from styles import "./index.css or scss"
  // test: /\.s?css$/i,
  // use: [
  //   "style-loader", {
  //   loader:"css-loader",
  //   options: { modules: true }
  //   }, "sass-loader"]
  // },

  // To Support CSS as general import and SCSS as module import
  // {
  //   test: /\.css$/i,
  //   use: ["style-loader", "css-loader"]
  // },
  // {
  //   test: /\.scss$/i,
  //   use: [
  //     "style-loader", {
  //       loader: "css-loader",
  //       options: { modules: true }
  //     }, "sass-loader"]
  // },
  ]},

  plugins: [htmlPlugin],

  /* This needed to make BrowserRouter work */
  devServer: {
    historyApiFallback: true,
  }
};