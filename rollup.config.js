import {terser} from 'rollup-plugin-terser';

export default {
  input: "./src/main.js",
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
};
