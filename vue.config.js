const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/web-font-test/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '字體測試'
        return args
      })
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new StyleLintPlugin({
            files: ['**/*.{html,vue,css,sass,scss}'],
            fix: true
          })
        ]
      }
    }
  },
  pwa: {
    name: '字體測試',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      name: '字體測試',
      hort_name: '字體測試',
      start_url: '.',
      display: 'standalone',
      theme_color: '#000000'
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
      'mask-icon': null
    },
    iconPaths: null
  },
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
