# Adding Foundation

First, add Font Awesome as a dependency through yarn with the following:

```bash
yarn add foundation-sites what-input
```

Next, uncomment the following in `config.yml`

```yaml
#    foundation:
#      - "node_modules/foundation-sites/scss"
```

and

```yaml
#      - "node_modules/what-input/dist/what-input.min.js"
#      - "node_modules/foundation-sites/dist/js/foundation.min.js"
```

Next, add the following to line 32 in `gulpfile.js`.

```js
includePaths: PATHS.sass.foundation,
```
