# NPM Scripts Compiler

A compiler for scss, js and assets, built with npm scripts.

Read my [NPM Scripts blog post](https://nervewax.com/npm-scripts-compiler/) for more info.

### Install

First you'll need [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/).  
`git clone` this repo and open the dir in your terminal.  
Run `yarn` or `npm install` to grab all dependencies, this shouldn't take more than a couple of minutes  
You're good to go!

### Tasks

To run a task, in terminal run `yarn [task name]` or `npm [task name]`.

- `watch` is for development, it runs a relevant task when you make changes to source files. It compiles js and scss, and copies images, svgs and fonts to the public folder. [Livereload](https://www.npmjs.com/package/livereload) is also included.

- `build` is for production, it runs all tasks in sequence. It will compile js & scss, minify images & svgs and copy fonts to the public folder.

- `dev` will run once like build. It compiles css and js, copies fonts and assets over to the output folder without running any minification.
