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
    port: 4008,
    historyApiFallback: true,
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
      name: "assets",
      filename: "remoteEntry.js",
      exposes: {
        "./Application": "./src/App",
        "./StatWidget": "./src/StatWidget",
        "./AssetsNavMenu": "./src/AssetsNavMenu",
      },
      remotes: {
        shell: "superfleet_shell@http://localhost:3000/remoteEntry.js",
        ui: "superfleet_ui@http://localhost:3002/remoteEntry.js",
        chart: "charting@http://localhost:4002/remoteEntry.js",
        datagrid: "datagrid@http://localhost:4007/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: dependencies["react"] },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
