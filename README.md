# npm-compiler
A compiler for scss, js and asset sync, built with npm scripts.

Thanks to [damonbauer](https://github.com/damonbauer/npm-build-boilerplate), for the boilerplate used as a starting point for this.

### Install
`yarn install` to grab all dependencies.

### Tasks
To run a task, in terminal run `yarn [task name]`.  
E.g. `yarn watch`.

- `build:css`  
Lint, compile and run post css on .scss files.
- `build:js`  
Lint and uglify js.
- `build:assets`  
Minify and sync image, svg or font files.
- `build`  
Runs all build tasks in sequence.
- `watch:css`  
Run `build:css` when a .scss file changes.
- `watch:js`  
Run `build:js` when a .js file changes.
- `watch:assets`  
Run `build:assets` when an image, svg or font file changes.
- `watch`  
Run all watch tasks in parallel.
