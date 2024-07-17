module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/repository-name/'  // GitHub Pages에 호스팅될 경로 설정
    : '/',
  outputDir: 'dist'  // 빌드된 파일들이 생성될 폴더 설정
}