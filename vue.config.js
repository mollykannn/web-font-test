const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  assetsDir: 'static',
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
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
