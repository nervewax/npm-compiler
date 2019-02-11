# npm-compiler

A compiler for scss, js and assets, built with npm scripts.

### Install

First you'll need [yarn](https://yarnpkg.com/). Once yarn is installed, `git clone` this repo and open the dir in your terminal. You can then run `yarn install` to grab all dependencies, this shouldn't take more than a few minutes.

### Tasks

To run a task, in terminal run `yarn [task name]`.

- `watch` is for development, it runs a tasks when you make changes to source files. It compiles js and scss, but only copies images, svgs and fonts to the public folder. [Livereload](https://www.npmjs.com/package/livereload) is also included.

- `build` is for production, it runs all tasks in sequence. It will compile js and scss, and will minify images/svgs and copy fonts to the public folder.

---

<small>Thanks to [damonbauer](https://github.com/damonbauer/npm-build-boilerplate), for the boilerplate used as a starting point for this.</small>
