const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const env = process.env.NODE_ENV || "development";

// const pluginsList = [new CleanWebpackPlugin()];
const pluginsList = [];

module.exports = {
  mode: env,
  entry: "./src/index.js",
  output: {
    filename: env === 'development' ? "react-simple-audio.js" : "react-simple-audio.min.js",
    path: path.join(__dirname, "lib"),
    libraryTarget: 'umd',    // 采用通用模块定义
    // libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
    umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
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
              // "@babel/plugin-transform-runtime"
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
        test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/,
        oneOf: [
          {
            use: {
              loader: "file-loader",
              options: {
                limit: 1024 * 100,
                name: "assets/[name].[ext]"
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
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  resolve: {
    enforceExtension: false,
    extensions: [
      ".js", 
      ".jsx",
    ],
    // 设置别名
    alias: {
      "@": path.join(__dirname, "src") // 这样配置后 @ 可以指向 src 目录
    }
  },

  plugins: pluginsList
  // external: ["react"],
  // ignore: ["node_modules/**"]
};
