## Get started

### Clone the repo

```shell
git clone https://github.com/akram-gorashi/books-app.git
cd books-app
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
```
#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm run start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run json-server` - runs the json server to run the json file saved locally in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run lint` - runs `tslint` on the project files.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run serve` - runs `lite-server`.

These are the test-related scripts:

* `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
* `npm run ci` - cleans, lints, and builds the application and runs Intern tests (both unit and functional) one time.

