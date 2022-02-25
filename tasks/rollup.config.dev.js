import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import html from '@rollup/plugin-html';
import paths from './paths';

export default {
  input: `${paths.source}/index.js`,
  output: [
    {
      file: `${paths.build}/index.js`,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    html(),
    copy({
      targets: [
        { src: `${paths.public}/*`, dest: paths.build }
      ]
    })
  ]
};
