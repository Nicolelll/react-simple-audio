const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const env = process.env.NODE_ENV || "development";

const PORT = 8081
// const pluginsList = [new CleanWebpackPlugin(), new htmlWebpackPlugin()];
const pluginsList = [new htmlWebpackPlugin({
  template: path.join(__dirname, './index.html'),
})];

module.exports = {
  mode: env,
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].[hash:8].js',
    // publicPath: getPublicPath(),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        exclude: /node_modules/ // 只解析src下面的文件,不推荐用exclude
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/ // 只解析src下面的文件,不推荐用exclude
      },
      {
        test: /\.mp3$/,
        use: ["url-loader"],
        exclude: /node_modules/ // 只解析src下面的文件,不推荐用exclude
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|woff|ttf)$/,
        oneOf: [
          {
            use: {
              loader: "file-loader",
              options: {
                limit: 1024 * 100,
                name: "img/[name].[ext]"
              }
            },
          },
          {
            use: "url-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: [".js", ".jsx"],
    // 设置别名
    alias: {
      "@": path.join(__dirname, "src") // 这样配置后 @ 可以指向 src 目录
    }
  },
  plugins: pluginsList,
  devServer: {
    contentBase: path.join(__dirname, './index.html'),
    // host: HOST,
    compress: true,
    inline: true,
    port: PORT,
    historyApiFallback: true,
    hot: true,
    clientLogLevel: 'none',
    stats: {
      color: true,
      errors: true,
      version: true,
      warnings: true,
      progress: true,
    },
  } 
  // external: ["react"],
  // ignore: ["node_modules/**"]
};
