# React Utils Documentation Website

This website is single page app built on [React](http://facebook.github.io/react/), with styles and structure taken from the [React Bootstrap](http://react-bootstrap.github.io/) docs website.
The app is statically generated to HTML via node and then hosted it by pushing HTML to [GitHub Pages](http://pages.github.com/).

## Installation

If you are working on the site, you will want to install and run a local copy of it.

### Dependencies

All dependencies are installed with npm, just:

```sh
$ npm install
```

### Instructions

#### Development

The site uses React bootstrap components, so first make sure you've installed and built the project (via `gulp`). Then:

```sh
$ npm start
$ open http://localhost:4000/
```

This will start an express based node server which will generate static html content and the js bundle on request. After making any modifications the server should restart and regenerate any necessary files on the next request.

#### Production

This site is statically published on github pages, to do this the static assets need to be generated.

```sh
$ npm run build
```

To test the static files you can use the included express based static file server.

```sh
$ npm run start-prod
$ open http://localhost:4000/
```
