var gulp = require('gulp');
var open = require('gulp-open');


// Open an URL: 

gulp.task('open', ['less', 'images', 'fonts', 'watch'], function() {
    var options = {
        url: 'http://localhost:3001'
    };
    gulp.src('')
        .pipe(open('', options));
});