
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebExtWebpackPlugin = require("@ianwalter/web-ext-webpack-plugin");

module.exports = {
  entry: {
    popup: "./ts/popup.ts",
    clock: "./ts/Clock.ts",
    options: "./ts/options.ts",
    options_html: "./html/options.html",
    popup_html: "./html/popup.html",
    icon_svg: "./assets/icon_2.svg",
    icon_png: "./assets/icon_2.png"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new WebExtWebpackPlugin()
  ]
}