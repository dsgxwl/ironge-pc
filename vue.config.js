const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
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
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('./src')).set('await-to', resolve('./src/utils/await-to'))
  },
}
