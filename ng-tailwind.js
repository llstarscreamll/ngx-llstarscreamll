module.exports = {
  // Tailwind Paths
  configJS: './tailwind.config.js',
  sourceCSS: './apps/pascal/src/tailwind.css',
  outputCSS: './apps/pascal/src/styles.css',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
