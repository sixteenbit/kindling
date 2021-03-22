# Font Awesome

There are multiple ways to use Font Awesome, but an easy method is to use their SVG + JS framework.

## Step 1 – Add Font Awesome as a Dependency

Execute the following command to add `fontawesome-free` as a dependency through `yarn`.

```shell
yarn add @fortawesome/fontawesome-free
```

## Step 2 – Add Font Awesome to the Config

Open the file `config.yml` and uncomment the following:

```yaml
#    fontawesome:
#      - "node_modules/@fortawesome/fontawesome-free/js/all.js"
```

## Step 3 – Create a New Gulp Task

Open the file `gulpfile.js` and add the following around `line 67`:

```js
gulp.task(
		'javascript:fontawesome',
		function () {
			return gulp.src(PATHS.javascript.fontawesome)
					.pipe($.sourcemaps.init())
					.pipe($.concat('fontawesome.js'))
					.pipe(gulp.dest('assets/js'))
					.pipe($.if(PRODUCTION, $.uglify({'mangle': false})))
					.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
					.pipe(gulp.dest('assets/js'))
		}
);
```

Next, add `javascript:vendors` to the task array like the following:

```js
// Compiles JavaScript into a single file
gulp.task('javascript', gulp.series('javascript:custom', 'javascript:vendors'));
```

This will copy `node_modules/@fortawesome/fontawesome-free/js/all.js` to `assets/js/fontawesome.js`.

## Step 4 – Add JavaScript to HTML

Add the following before the closing `</body>` of your template:

```html
<script src="assets/js/fontawesome.js"></script>
```
