const path = require("path");

module.exports = {
  // other configurations...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src/styles"),
      },
    ],
  },
};
