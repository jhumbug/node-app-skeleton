var gulp = require('gulp');

// gulp.task('default', ['less', 'images', 'fonts', 'markup', 'watch', 'open']);
gulp.task('build', ['less', 'images', 'vendor', 'fonts']);
