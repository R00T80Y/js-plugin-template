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
      file: `${paths.build}/cjs/index.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    {
      file: `${paths.build}/esm/index.js`,
      format: 'esm',
      sourcemap: true
    },
    {
      file: `${paths.build}/umd/index.js`,
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
        if (output.file.includes(`${paths.build}/cjs/`)) {
          prefix = `${paths.build}/cjs/`;
          type = 'commonjs';
        } else if (output.file.includes(`${paths.build}/esm/`)) {
          prefix = `${paths.build}/esm/`;
          type = 'module';
        } else if (output.file.includes(`${paths.build}/umd/`)) {
          prefix = `${paths.build}/umd/`;
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
