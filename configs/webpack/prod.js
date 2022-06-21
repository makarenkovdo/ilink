// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

const TerserPlugin = require("terser-webpack-plugin");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          format: {
            comments: false,
          },
        },
        extractComments: true,
      }),
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
});
