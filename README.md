# npm-compiler

A compiler for scss, js and assets, built with npm scripts.

### Install

First you'll need [yarn](https://yarnpkg.com/). Once yarn is installed, `git clone` this repo and open the dir in your terminal. You can then run `yarn install` to grab all dependencies, this shouldn't take more than a few minutes.

### Tasks

To run a task, in terminal run `yarn [task name]`.

- `watch` is for development, it runs a relevant task when you make changes to source files. It compiles js and scss, and copies images, svgs and fonts to the public folder. [Livereload](https://www.npmjs.com/package/livereload) is also included.

- `build` is for production, it runs all tasks in sequence. It will compile js & scss, minify images & svgs and copy fonts to the public folder.

### Features

lint-scss
prettier --write src/scss/\*.scss

scss
node-sass -o public/assets/css/ src/scss/

postcss
postcss public/assets/css/main.css -m -o public/assets/css/main.min.css

lint-js
eslint src/js || true

terser
mkdirp public/assets/js && terser src/js/_.js -o public/assets/js/main.js && terser src/js/_.js -m -c -o public/assets/js/main.min.js

clean:all
removes public/assets/

clean:code
removes public/assets/{css,js}

clean:assets
removes public/assets/{font,image,svg}

clean
run-s clean:\*

copy:fonts
cp -a src/font public/assets/,

copy:assets
cp -a src/{font,image,svg} public/assets/,

imagemin
imagemin src/image/\* --out-dir=public/assets/image,

svgo
mkdirp public/assets/svg && svgo -f src/svg -o public/assets/svg,

livereload
