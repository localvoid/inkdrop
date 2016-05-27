const gulp = require("gulp");
const series = gulp.series;
const parallel = gulp.parallel;
const typescript = require("typescript");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const del = require("del");
const tsConfig = require("./tsconfig.json");
const rollup = require("rollup");
const rollupTypeScript = require("rollup-plugin-typescript");

function clean() {
  return del(["dist", "build"]);
}

function cleanTests() {
  return del("build/tests");
}

function buildLib() {
  const merge = require("merge2");

  const result = gulp.src(["lib/**/*.ts"])
    .pipe(tslint())
    .pipe(tslint.report("verbose", {
      emitError: false,
    }))
    .pipe(ts(Object.assign(tsConfig.compilerOptions, {
      typescript: typescript,
      target: "es6",
      module: "commonjs",
      declaration: true,
    })));

  return merge([
    result.dts.pipe(gulp.dest("dist/typings")),
    result.js.pipe(gulp.dest("build/lib")),
  ]);
}

function buildTests() {
  return gulp.src(["tests/**/*.ts", "typings/index.d.ts"])
    .pipe(tslint())
    .pipe(tslint.report("verbose", {
      emitError: false,
    }))
    .pipe(ts(Object.assign(tsConfig.compilerOptions, {
      typescript: typescript,
      target: "es6",
      module: "commonjs",
    })))
    .pipe(gulp.dest("build"));
}

function buildES6() {
  const merge = require("merge2");

  const result = gulp.src(["lib/**/*.ts"])
    .pipe(tslint())
    .pipe(tslint.report("verbose", {
      emitError: false,
    }))
    .pipe(ts(Object.assign(tsConfig.compilerOptions, {
      typescript: require("typescript"),
      target: "es6",
    })))
    .pipe(gulp.dest("build/es6"));
}

function distES6() {
  return rollup.rollup({
    entry: "build/es6/inkdrop.js",
  }).then(function(bundle) {
    return bundle.write({
      format: "es6",
      dest: "dist/es6/inkdrop.js",
    });
  });
}

function distUMD() {
  return rollup.rollup({
    entry: "src/inkdrop.ts",
    plugins: [
      rollupTypeScript(Object.assign(tsConfig.compilerOptions, {
        typescript: typescript,
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
}

function test() {
  const jasmine = require("gulp-jasmine");

  return gulp.src("build/tests/*.spec.js")
    .pipe(jasmine());
}

exports.clean = clean;
exports.dist = series(clean, parallel(buildLib, series(buildES6, distES6), distUMD));
exports.test = series(cleanTests, parallel(buildLib, buildTests), test);
