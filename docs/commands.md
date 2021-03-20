# Commands

## gulp

The **default** task will compile the stylesheets, concatenate javascript files, and optimize images.

```bash
gulp
```

## gulp watch

The **watch** task will run the **default** task as well as watch sass, js, and html files for any changes.

```bash
gulp watch
```

## gulp styles

The **styles** task will compile SCSS to CSS with auto-prefixing, sourcemaps, and RTL support.

```bash
gulp styles
```

## gulp javascript

The **javascript** task will concat all js files located in `src/js/` prefixed with an `_` into `assets/js/app.js`.

```bash
gulp javascript
```

## gulp server

The **server** task will run the **default** task, start a local server, and **watch** for local file changes.

```bash
gulp server
```

For more information, see [Browsersync](https://www.browsersync.io/).

## gulp release

The **release** task will run the **default** task and copy only production files to the `release` directory.

```bash
gulp release
```

Passing the `--production` flag with any of these commands will minify all CSS and JS files.

```bash
gulp release --production
```
