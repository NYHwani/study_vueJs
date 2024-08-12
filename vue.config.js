const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/study_vueJs/'  // GitHub Pages에 호스팅될 경로 설정
    : '/',
  outputDir: 'docs',  // 빌드된 파일들이 생성될 폴더 설정
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: false  // crypto 모듈을 빈 모듈로 대체
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ]
  }
};