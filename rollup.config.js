import tsPlugin from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'es',
      file: pkg.module,
    },
  ],
  plugins: [
    peerDepsExternal(),
    tsPlugin({
      typescript: require('typescript'),
    }),
    terser(),
    postcss({
      extract: true,
      modules: true,
      plugins: [],
    }),
  ],
};
