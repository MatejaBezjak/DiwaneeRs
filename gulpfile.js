const gulp = require('gulp');
//const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
// //const concat = require('gulp-cancat');

gulp.task('message', done => {
    return console.log('Gulp is running...');
    done();
});

//Message
// gulp.task('message', function(){
//   return console.log('Gulp is running...');
// });

gulp.task('copyHtml', done => {
    gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
    done();
});

// //Copy All HTML
// gulp.task('copyHtml', function(){
//   gulp.src('src/*.html')
//       .pipe(gulp.dest('dist'));
// });

// gulp.task('imageMin', done => {
//     gulp.src('src/images/*')
//       .pipe(imagemin())
//       .pipe(gulp.dest('dist/images'))
//     done();
// });

// //Optimize images
// gulp.task('imageMin', () =>
// 	gulp.src('src/images/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/images'))
// );

gulp.task('minify', done => {
    gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
    done();
});

// //Optimize js
// gulp.task('minify', function(){
//   gulp.src('src/js/*.js')
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/js'));
// });

gulp.task('sass', done => {
    gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
    done();
});

//Compile Sass
// gulp.task('sass', function(){
//   gulp.src('src/sass/*.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('dist/css'));
// });

// Scripts (if more js files + dodati file u src, iz default izbrisati minify
// gulp.task('scripts', async function(){
//   gulp.src('src/js/*.js')
//       .pipe(concat('main.js'))
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/js'));
// });

// gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass']);

gulp.task('default', gulp.series('copyHtml', 'minify', 'sass'));

// gulp.task('watch, async function(){
//     gulp.watch('src/js/*.js', ['scripts']);
//     gulp.watch('src/images/*', ['imageMin']);
//     gulp.watch('src/sass/*.scss', ['sass']);
//     gulp.watch('src/*.html', ['copyHtml']);
// }');

