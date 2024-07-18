module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/study_vueJs/'  // GitHub Pages에 호스팅될 경로 설정
    : '/'
}