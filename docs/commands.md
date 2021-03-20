# Available Commands

Kindling uses gulp to run various tasks to build the project. The following are the main tasks you'll need to run to develop your project.

## gulp

The **default** task will compile the stylesheets, concatenate javascript files, and optimize images.

```shell
gulp
```

## gulp watch

The **watch** task will run the **default** task as well as watch sass, js, and html files for any changes.

```shell
gulp watch
```

## gulp styles

The **styles** task will compile SCSS to CSS with auto-prefixing, sourcemaps, and RTL support.

```shell
gulp styles
```

## gulp javascript

The **javascript** task will concat all js files located in `src/js/` prefixed with an `_` into `assets/js/app.js`.

```shell
gulp javascript
```

## gulp server

The **server** task will run the **default** task, start a local server, and **watch** for local file changes.

```shell
gulp server
```

?> For more information, see [Browsersync](https://www.browsersync.io/).

## gulp release

The **release** task will run the **default** task and copy only production files to the `release` directory.

```shell
gulp release
```

Passing the `--production` flag with any command will remove sourcemaps and minify all CSS and JS files.

```shell
gulp release --production
```
