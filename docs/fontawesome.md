# Font Awesome

## Step 1 – Add Font Awesome as a Dependency

Execute the following command to add `fontawesome-free` as a dependency through `yarn`.

```shell
yarn add @fortawesome/fontawesome-free
```

## Step 2 – Add Font Awesome Directories to Config

Open the file `config.yml` and uncomment the following:

```yaml
#    foundation:
#      - "node_modules/foundation-sites/scss"

...

#  fonts:
#    fontawesome:
#      - "node_modules/@fortawesome/fontawesome-free/webfonts/*"
```

## Step 3 – Create a New Gulp Task

Open the file `gulpfile.js` and add the following around `line 44`:

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
```

This is similar to the `styles` task but specific to `fontawesome.scss`.
