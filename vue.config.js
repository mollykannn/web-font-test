// const StyleLintPlugin = require('stylelint-webpack-plugin')

// module.exports = {
//   productionSourceMap: false,
//   runtimeCompiler: true,
//   publicPath: import.meta.env.NODE_ENV === 'production' ? '/web-font-test/' : '/',
//   chainWebpack: config => {
//     config.plugin('html').tap(args => {
//       args[0].title = '字體測試'
//       return args
//     })
//   },
//   configureWebpack: () => {
//     if (import.meta.env.NODE_ENV === 'production') {
//       return {
//         plugins: [
//           new StyleLintPlugin({
//             files: ['**/*.{html,vue,css,sass,scss}'],
//             fix: true
//           })
//         ]
//       }
//     }
//   },
//   pwa: {
//     name: '字體測試',
//     themeColor: '#545454',
//     msTileColor: '#545454',
//     appleMobileWebAppCapable: 'yes',
//     appleMobileWebAppStatusBarStyle: 'black',
//     manifestOptions: {
//       name: '字體測試',
//       hort_name: '字體測試',
//       start_url: "index.html",
//       display: 'standalone',
//       theme_color: '#545454'
//     },
//     iconPaths: {
//       maskIcon: null
//     },
//     workboxPluginMode: 'InjectManifest',
//     workboxOptions: {
//       swSrc: 'src/service-worker.js'
//     }
//   },
//   devServer: {
//     open: true,
//     overlay: {
//       warnings: true,
//       errors: true
//     }
//   }
// }
