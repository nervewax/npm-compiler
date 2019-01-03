# npm-compiler
A compiler for scss, js and asset sync, built with npm scripts.

### Install
`yarn install` to grab all dependencies.

### Tasks
To run a task, in terminal run `yarn [task name]`.  
E.g. `yarn watch`.

- `build:css`  
Lint, compile and run post css on .scss files.
- `build:js`  
Lint and uglify js.
- `build:images`  
Minify and sync images.
- `build`  
Runs all build tasks in sequence.
- `watch:css`  
Run `build:css` when a .scss file changes.
- `watch:js`  
Run `build:js` when a .js file changes.
- `watch:images`  
Run `build:images` when an image file changes.
- `watch`  
Run all watch tasks in parallel.
