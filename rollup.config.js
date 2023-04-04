/** @format */

import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { readdirSync } from "fs";
import { extname, resolve } from "path";
import del from "rollup-plugin-delete";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";

const PATH = {
  COMMONJS: "dist/cjs",
  ES_MODULES: "dist",
};

export default [
  {
    input: [...files("./src/components"), "./src/index.ts"],

    output: [
      {
        dir: PATH.ES_MODULES,
        format: "esm",
        sourcemap: false,
        exports: "named",
        minifyInternalExports: true,
        compact: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },

      {
        dir: PATH.COMMONJS,
        format: "cjs",
        sourcemap: false,
        inlineDynamicImports: true,
        minifyInternalExports: true,
        compact: true,
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      nodeResolve({ preferBuiltins: false }),
      ts({
        tsconfig: resolve(__dirname, "tsconfig.json"),
        browserslist: false,
      }),
      postcss({
        plugins: [require("tailwindcss"), require("autoprefixer")],
        minimize: true,
        extract: { fileName: "index.scss" },
      }),
      external(),
      image(),
      commonjs(),
      terser(),
    ],

    external: [/node_modules/],
  },
];

function files(dir) {
  return readdirSync(dir)
    .filter((el) => extname(el) === ".ts")
    .map((el) => dir + "/" + el);
}
