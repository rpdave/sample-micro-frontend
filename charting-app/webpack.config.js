const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const dependencies = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 4002,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "charting",
      filename: "remoteEntry.js",
      exposes: {
        "./Application": "./src/App",
        "./Counter": "./src/Counter",
      },
      remotes: {
        texteditor: "texteditor@http://localhost:4004/remoteEntry.js",
        sf_ui: "superfleet_ui@http://localhost:3002/remoteEntry.js",
        sf_shell: "superfleet_shell@http://localhost:3000/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: dependencies["react"] },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
