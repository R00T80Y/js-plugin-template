import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import browsersync from 'rollup-plugin-browsersync';
import fg from 'fast-glob';
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
    copy({
      targets: [
        { src: `${paths.public}/*`, dest: paths.build }
      ]
    }),
    {
      name: 'watch-external',
      async buildStart() {
        const files = await fg(`${paths.public}/*.html`);
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
          this.addWatchFile(file);
        }
      }
    },
    browsersync({
      server: 'build',
      port: 9000
    })
  ]
};
