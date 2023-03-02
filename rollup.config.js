import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const options = {
    sourceMapsEnabled: false,
    minified: false,
};

const outputs = {
    minified: options.minified
        ? [
              {
                  file: 'dist/index.min.cjs.js',
                  format: 'cjs',
                  plugins: [terser()],
                  sourcemap: options.sourceMapsEnabled,
                  exports: 'auto',
              },
              {
                  file: 'dist/index.esm.min.mjs',
                  format: 'esm',
                  plugins: [terser()],
                  sourcemap: options.sourceMapsEnabled,
              },
          ]
        : [],
    unminified: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: options.sourceMapsEnabled,
            exports: 'auto',
            plugins: [],
        },
        {
            file: 'dist/index.esm.mjs',
            format: 'esm',
            sourcemap: options.sourceMapsEnabled,
            plugins: [],
        },
    ],
    empty: [],
};

export default {
    input: 'src/index.ts',
    output: [...outputs.unminified, ...outputs.minified],
    plugins: [
        replace({
            __BUILD_DATE__: () => new Date().toISOString(),
            __BUILD_VERSION__: () => require('./package.json').version,
        }),
        commonjs(),
        nodeResolve(),
        typescript(),
    ],
    external: [],
};
