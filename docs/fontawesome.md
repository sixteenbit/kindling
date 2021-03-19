# Adding Font Awesome

First, add Font Awesome as a dependency through yarn with the following:

```bash
yarn add @fortawesome/fontawesome-free
```

Next, uncomment the following in `config.yml`

```yaml
#    foundation:
#      - "node_modules/foundation-sites/scss"
```

and

```yaml
#  fonts:
#    fontawesome:
#      - "node_modules/@fortawesome/fontawesome-free/webfonts/*"
```

Next, add the following to line 44 in `gulpfile.js`.

```js
gulp.task(
	'sass:fontawesome',
	function () {
		return gulp.src('src/scss/vendors/fontawesome/fontawesome.scss')
			.pipe($.sourcemaps.init())
			.pipe(
				$.sass(
					{
						includePaths: PATHS.sass.fontawesome,
						outputStyle: 'expanded'
					}
				)
					.on('error', $.sass.logError)
			)
			.pipe($.autoprefixer())
			.pipe($.if(PRODUCTION, $.cssnano()))
			.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
			.pipe(gulp.dest('assets/css'))
			.pipe($.rtlcss())
			.pipe(rename({suffix: '-rtl'}))
			.pipe(gulp.dest('assets/css'));
	}
);

// Copy Font Awesome fonts
gulp.task(
	'copy:fonts',
	function () {
		return gulp.src(PATHS.fonts.fontawesome)
			.pipe(gulp.dest('assets/webfonts'));
	}
);
```

Next, update the styles task to the following.

```js
// Compiles Sass files into CSS
gulp.task('styles', gulp.series('sass:style', 'sass:fontawesome', 'copy:fonts'));
```

Now run the build task with `gulp`.

Lastly, add the stylesheet within the `<head>` of your .html file.

```html
<link rel="stylesheet" href="assets/css/fontawesome.css"/>
```