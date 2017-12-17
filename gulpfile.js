const gulp = require('gulp');
const zip = require('gulp-zip');
 
gulp.task('default', () =>
    gulp.src('*')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('dist'))
);
