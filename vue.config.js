const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_PUBLIC_PATH
      : "/",
  outputDir: "dist", // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: "0.0.0.0",
    port: 8082, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: (app) => {},
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  chainWebpack: (config) => {
    /* 公共SCSS */
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: ["./src/styles/public.scss"],
        })
        .end();
    });
    // 压缩代码
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: "all",
    });
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"));
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
