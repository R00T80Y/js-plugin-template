import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { promises } from 'fs';
import paths from './paths';

// const { promises: fs } = require('fs');
export default {
  input: `${paths.source}/PluginName.plugin.js`,
  output: [
    {
      file: `${paths.dist}/cjs/index.js`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `${paths.dist}/es/index.js`,
      format: 'esm',
      sourcemap: true
    },
    {
      file: `${paths.dist}/umd/index.js`,
      format: 'umd',
      sourcemap: true,
      name: 'PluginName'
    }
  ],
  plugins: [
    (() => ({
      name: 'package-type',
      async writeBundle(output) {
        let prefix;
        let type;
        if (output.file.includes(`${paths.dist}/cjs/`)) {
          prefix = `${paths.dist}/cjs/`;
          type = 'commonjs';
        } else if (output.file.includes(`${paths.dist}/es/`)) {
          prefix = `${paths.dist}/es/`;
          type = 'module';
        } else if (output.file.includes(`${paths.dist}/umd/`)) {
          prefix = `${paths.dist}/umd/`;
          type = 'commonjs';
        }
        if (typeof prefix !== 'undefined') {
          const pkgFilePath = path.join(prefix, 'package.json');
          try {
            await promises.unlink(pkgFilePath);
          } catch (error) {}
          await promises.writeFile(
            pkgFilePath,
            JSON.stringify({ type }),
            'utf8'
          );
        }
      }
    }))(),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};
