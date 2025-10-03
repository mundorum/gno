import { defineConfig } from 'vite'
import { resolve } from 'node:path'

function htmlAliasPlugin() {
  return {
    name: 'html-alias',
    transformIndexHtml(html) {
      // replace automatically redirected CDN link
      const stage1 = html.replace(
        /https:\/\/cdn\.jsdelivr\.net\/npm\/@mundorum\/oid(?!\/)/g,
        '/node_modules/@mundorum/oid/oid.min.js'
      )
      // replace remaining CDN paths with local paths
      return stage1.replace(/https:\/\/cdn.jsdelivr.net\/npm\//g, '/node_modules/')
    }
  }
}

export default defineConfig(({ command, mode }) => {
  // If running dev server (serve command), use the server configuration
  if (command === 'serve') {
    return {
      plugins: [htmlAliasPlugin()]
    }
  }

  const assetFileNames = (assetInfo) => {
    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
      return target === 'development' ? `gno.css` : `gno.min.css`
    }
    return assetInfo.name
  }
  
  const rollupOptions =
    {
      external: (id) => id === '@mundorum/oid/oid.js',
      output: {
        globals: {
          '@mundorum/oid/oid.js': 'oidlib'
        },
        assetFileNames
      }
    }
  if (mode === 'development') {
    return {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/assembly.js'),
          name: 'gno',
          fileName: () => 'gno.js', // function avoids .es
          formats: ['es']  // ES module format
        },
        minify: false,
        sourcemap: true,
        outDir: 'dist',
        emptyOutDir: false, // avoid cleaning the output directory
        rollupOptions: rollupOptions
      }
    }
  }
  // Production config (UMD build)
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/assembly.js'),
        name: 'gno',
        fileName: () => 'gno.min.js', // function avoids .umd
        formats: ['umd']
      },
      minify: true,
      outDir: 'dist',
      emptyOutDir: false,
      cssMinify: true,
      rollupOptions: rollupOptions
    }
  }
})