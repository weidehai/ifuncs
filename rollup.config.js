import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "./src/main.ts",
  output: [
    {
      file: "./dist/ifuncs.js",
      name: "ifuncs",
      format: "umd",
    },
    {
      file: "./dist/ifuncs.min.js",
      name: "ifuncs",
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [typescript()]
};
