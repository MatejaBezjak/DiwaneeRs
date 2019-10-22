const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
//const concat = require('gulp-cancat');


//Message
gulp.task('message', async function(){
  return console.log('Gulp is running...');
});

//Copy All HTML
gulp.task('copyHtml', async function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

//Optimize images
gulp.task('imageMin', async () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

//Optimize js
gulp.task('minify', async function(){
  gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

//Compile Sass
gulp.task('sass', async function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});

//Scripts (if more js files + dodati file u src, iz default izbrisati minify
//gulp.task('scripts', async function(){
  //gulp.src('src/js/*.js')
      //.pipe(concat('main.js'))
      //.pipe(uglify())
      //.pipe(gulp.dest('dist/js'));
//});

//gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass']);

//gulp.task('watch, async function(){
    //gulp.watch('src/js/*.js', ['scripts']);
    //gulp.watch('src/images/*', ['imageMin']);
    //gulp.watch('src/sass/*.scss', ['sass']);
    //gulp.watch('src/*.html', ['copyHtml']);
//}');
