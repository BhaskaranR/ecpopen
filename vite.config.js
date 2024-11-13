const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/js/index.js'),
      name: 'ECPOpen',
      fileName: () => 'ecpopen.js',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        extend: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'ecpopen.css';
          }
          return `assets/[name][extname]`;
        },
      }
    },
  }
});