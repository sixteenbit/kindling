# Foundation

## Step 1 – Add Foundation as a Dependency

```shell
yarn add foundation-sites what-input jquery
```

?> Foundation will also need **what-input** and **jquery** as a dependency.

## Step 2 – Add Foundation to the Config

Open the file `config.yml` and uncomment the following:

```yaml
#    foundation:
#      - "node_modules/foundation-sites/scss"

...

#      - "node_modules/jquery/dist/jquery.min.js"
#      - "node_modules/what-input/dist/what-input.min.js"
#      - "node_modules/foundation-sites/dist/js/foundation.min.js"
```

This makes all of Foundation's SCSS files available for import and will copy the needed JS files using the `javascript:vendors` task.

## Step 3 – Create a New Gulp Task

Open the file `gulpfile.js` and add the following around `line 67`:

```js
gulp.task(
	'javascript:vendors',
	function () {
		return gulp.src( PATHS.javascript.vendors )
		.pipe( $.sourcemaps.init() )
		.pipe( $.if( PRODUCTION, $.uglify( {'mangle': false} ) ) )
		.pipe( $.if( ! PRODUCTION, $.sourcemaps.write() ) )
		.pipe( gulp.dest( 'assets/js' ) )
	}
);
```

Next, add `javascript:vendors` to the task array like the following:

```js
// Compiles JavaScript into a single file
gulp.task('javascript', gulp.series('javascript:custom', 'javascript:vendors'));
```

This will copy all files specified in the `config.yml` to the `assets/js/` directory.

## Step 4 – Import Foundation in SASS

Open the file `src/scss/main.scss` and uncomment the following:

```scss
//@import 'foundation';
//@include foundation-everything();
```

## Step 5 – Add JavaScript to HTML

Add the following before the closing `</body>` of your template:

```html
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/what-input.min.js"></script>
<script src="assets/js/foundation.min.js"></script>
<script>
	$(document).foundation();
</script>
```


