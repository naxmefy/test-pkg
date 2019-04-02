# test-pkg

this is a sample project structure for pkg application.
The following list of tasks has been proofed.

- [x] pack the main entry point of the application
- [x] pack additional commands that can be triggered optionally
- [x] pack a server application
- [x] the server application should be able to render/send assets
- [x] pack a client application
- [ ] check the pack
- [ ] try to unpack
- [ ] check size
- [ ] list alternatives (like packr - go based...)

## structure

* the main entry point is `index.js`. this will be triggered by `$ ./test-pkg`
* additional commands are inside commands folder and required inside `index.js` file
* example `cli.js` is triggered by `$ ./test-pkg cli`
* example `server.js` is triggered by `$ ./test-pkg server`
* the server command is starting an express server with a server side rendered page on `/` route
* the client application needs to be build before the root project is building (build output of client)
* the client application is rendered by the express server on `/client` route

## hints

* `client` and `server` could be outsourced projects. (external repositories)
* a good overall cli application could be build with vorpal
* the simple cli for pkg app with yargs is absolutly fine
* if a client requires an relativepath read this: https://facebook.github.io/create-react-app/docs/deployment#building-for-relative-paths
* https://github.com/zeit/pkg#detecting-assets-in-source-code does not work you have to specify each asset containing folder in package.json of root folder