'use strict';

const $ = require('gulp-load-plugins')();
const browser = require('browser-sync');
const gulp = require('gulp');
const yaml = require('js-yaml');
const fs = require('fs');
const yargs = require('yargs');
const rimraf = require('rimraf');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Load settings from config.yml
const {PATHS} = loadConfig();

function loadConfig() {
	let ymlFile = fs.readFileSync('config.yml', 'utf8');
	return yaml.load(ymlFile);
}

// Delete the "release" folder
// This happens every time a build starts
function clean(done) {
	rimraf( 'release', done );
}

gulp.task(
	'sass:style',
	function () {
		return gulp.src('src/scss/main.scss')
			.pipe($.sourcemaps.init())
			.pipe(
				$.sass(
					{
						outputStyle: 'expanded'
					}
				)
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

// Compiles Sass files into CSS
gulp.task('styles', gulp.series('sass:style'));

gulp.task(
	'javascript:custom',
	function () {
		return gulp.src(PATHS.javascript.custom)
			.pipe($.sourcemaps.init())
			.pipe($.concat('app.js'))
			.pipe(gulp.dest('assets/js'))
			.pipe($.if(PRODUCTION, $.uglify({'mangle': false})))
			.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
			.pipe(gulp.dest('assets/js'))
	}
);

// Compiles JavaScript into a single file
gulp.task('javascript', gulp.series('javascript:custom'));

// Optimize images, move into assets directory
gulp.task(
	'images:optimize',
	function () {
		return gulp.src(PATHS.images)
			.pipe($.imagemin())
			.pipe(gulp.dest('assets/img'))
	}
);

gulp.task(
	'copy:release',
	function () {
		return gulp.src(
			[
				'**/*',
				'!.*',
				'!config.yml',
				'!gulpfile.js',
				'!package.json',
				'!yarn.lock',
				'!release',
				'!release/**/*',
				'!docs',
				'!docs/**/*',
				'!node_modules',
				'!node_modules/**/*'
			]
		)
			.pipe(gulp.dest('release'))
	}
);

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function () {

	// Watch these files
	var files = [
		PATHS.html,
	];

	browser.init(files, {
		server: true
	});

	watch();

});

// Watch for changes to assets and php files.
function watch() {
	gulp.watch('src/scss/**/*.scss').on('all', gulp.series(gulp.parallel('styles'), browser.reload));
	gulp.watch('src/js/**/*.js').on('all', gulp.series('javascript', browser.reload));
	gulp.watch('**/*.html').on('all', gulp.series(browser.reload));
}

// Clean directory and build the assets
gulp.task('default', gulp.series('styles', 'javascript', 'images:optimize'));

// Clean the directory, build the assets, and watch for file changes
gulp.task('watch', gulp.series('default', watch));

// Build the assets, run the server, and watch for file changes
gulp.task('server', gulp.series('default', 'browsersync', watch));

// Build project and copy to clean directory
gulp.task('release', gulp.series(clean, 'default', 'copy:release'));

// Initial build of the project
gulp.task('init', gulp.series('default'));
