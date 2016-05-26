const gulp = require("gulp");
const del = require("del");
const tsConfig = require("./tsconfig.json");
const rollup = require("rollup");
const rollupTypeScript = require("rollup-plugin-typescript");

gulp.task("clean", del.bind(undefined, ["dist", "build"]));

gulp.task("build:es6", () => {
  const ts = require("gulp-typescript");
  const tslint = require("gulp-tslint");
  const merge = require("merge2");

  const result = gulp.src(["src/**/*.ts"])
    .pipe(tslint())
    .pipe(tslint.report("verbose", {
      emitError: false,
    }))
    .pipe(ts(Object.assign(tsConfig.compilerOptions, {
      typescript: require("typescript"),
      target: "es6",
      declaration: true,
    })));

  return merge([
    result.dts.pipe(gulp.dest("dist/typings")),
    result.js.pipe(gulp.dest("build/es6")),
  ]);
});

gulp.task("dist:es6", gulp.series("build:es6", () => {
  return rollup.rollup({
    entry: "build/es6/inkdrop.js",
  }).then(function(bundle) {
    return bundle.write({
      format: "es6",
      dest: "dist/es6/inkdrop.js",
    });
  });
}));

gulp.task("dist:umd", () => {
  return rollup.rollup({
    entry: "src/inkdrop.ts",
    plugins: [
      rollupTypeScript(Object.assign(tsConfig.compilerOptions, {
        typescript: require("typescript"),
        target: "es5",
        module: "es6",
        declaration: false,
      })),
    ],
  }).then((bundle) => {
    return bundle.write({
      format: "umd",
      moduleName: "inkdrop",
      dest: "dist/umd/inkdrop.js",
    });
  });
});

gulp.task("dist", gulp.series("clean", gulp.parallel(["dist:es6", "dist:umd"])));
