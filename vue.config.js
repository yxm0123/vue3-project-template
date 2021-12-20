const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV !== 'development';
module.exports = {
  publicPath:'/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    },
  },
  configureWebpack:config =>{
    if (isProduction) {
      config.devtool = false;
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }));
    }
  },
  chainWebpack:config =>{
    config.when(process.env.NODE_ENV === 'development',
      config => config.devtool('source-map') // 解决浏览器debugger源码查找
    );
  },
  devServer:{
    port: 8080,
    open: true, // 配置自动启动浏览器
    proxy:{
      '/v1': {
        target: 'http://192.168.10.97:7000'
      }
    }
  }
}
