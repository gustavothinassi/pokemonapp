const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/app.scss";
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
})
