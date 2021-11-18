const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: "dist", // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: "0.0.0.0",
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: (app) => {},
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
  // 开启Gzip
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: "gzip",
            test: /\.(js|css)$/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
            minRatio: 0.8, // 压缩比
          }),
        ],
      };
    }
  },
};
