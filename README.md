# IgniteUI JS Blocks QuickStart

This repository is a fork of the [Angular QuickStart Source](https://github.com/angular/quickstart) and has been updated to demonstrate how to include and use components from the [Ignite UI JS Blocks](https://github.com/IgniteUI/igniteui-js-blocks). 

This quickstart app contains two views with components from the Ignite UI JS Blocks toolset and is a good starting point to bootstrap your application and start writing tests immediately.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `igniteui-js-blocks-quickstart`).
```shell
git clone https://github.com/IgniteUI/quickstart igniteui-js-blocks-quickstart
cd igniteui-js-blocks-quickstart
```
## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to continue working with this application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)
