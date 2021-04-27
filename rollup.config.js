import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import less from 'rollup-plugin-less';

export default [
    {
        input: './bibleup/js/bibleup.js',
        output: {
            file: './dist/esm/bibleup.es.min.js',
            format: 'es',
            name: 'BibleUp'
        },
        plugins: [
            less({
                insert: 'true',
                output: 'dist/bibleup.build.css'
            }),
            terser()
        ]
    },
    {
        // UMD
        input: './bibleup/js/bibleup.js',
        output: {
          file: './dist/bibleup.min.js',
          format: "umd",
          name: "BibleUp", // this is the name of the global object
          sourcemap: true,
        },
        plugins: [
            less({
                insert: 'true',
                output: 'dist/bibleup.build.css'
            }),
            /* babel({
                exclude: 'node_modules/**',
                babelHelpers: "bundled"
            }), */
            terser()
          ]
    }
]