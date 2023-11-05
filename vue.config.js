const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  outputDir: '../petpal-spring/src/main/resources/static',  

  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  devServer: {  
    proxy: {
      '/': {
        target: "http://localhost:8083",
        changeOrigin: true,
        ws: false,
        pathRewrite: {'^/':''},
      }
    }
  },  
});
