const path = require("path");

module.export = {
  entry: "./lib/components/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: { loader: "babel-loader" } }],
  },
};
