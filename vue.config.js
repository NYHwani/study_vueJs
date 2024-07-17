module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/study_vueJs/'  // GitHub Pages에 호스팅될 경로 설정
    : '/',
  outputDir: 'docs'  // 빌드된 파일들이 생성될 폴더 설정 
}