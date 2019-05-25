import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import postcssUrl from 'postcss-url'

export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      modules: {
        generateScopedName: "[hash:base64:5]"
      },
      plugins: [
        postcssUrl({
          url: "inline"
        })
      ]
    }),
    typescript({
      typescript: require("typescript"),
    }),
    nodeResolve(),
    terser()
  ]
}