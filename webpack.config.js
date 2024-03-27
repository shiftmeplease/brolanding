const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./public/entry.js", // Adjust if your file structure is different
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', // Injects CSS into the DOM.
        'css-loader',   // Interprets @import and url() like import/require() and will resolve them.
        // 'postcss-loader' // Processes CSS with PostCSS.
    ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Adjust if your file structure is different
    }),
    new CopyPlugin({
      patterns: [{ from: "./public/images/pepeog.png", to: "./pepeog.png" }],
    }),
  ],
  optimization: {
    minimizer: [
      // This is where ImageMinimizerPlugin should be configured
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: ['imagemin-pngquant'],
          },
        },
      }),
    ],
  },
  mode: "production", // Use 'development' for development settings
};
