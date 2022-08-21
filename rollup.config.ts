import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const name = 'Exmple'
const outputs = [];
const format = ['umd', 'cjs', 'esm'];

((formats) => formats.forEach((format) => {
  const formatProd = {
    name: format === 'umd' ? name : '',
    format: format,
    plugins: [terser()],
    file: `dist/${format}/index.js`,
  }
  const formateDev = {
    format: format,
    sourcemap: true,
    name: format === 'umd' ? name : '',
    file: `dist/${format}/index.development.js`,
  }
  // @ts-ignore
  outputs.push(formatProd, formateDev)
}))(format)

export default defineConfig({
  input: './src/index.ts',
  output: outputs,
  plugins: [
    ts()
  ]
})
