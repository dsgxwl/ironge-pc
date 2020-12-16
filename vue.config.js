// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/styles/variable.scss';
          `,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api-test.i-ronge.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
