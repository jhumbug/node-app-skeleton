var gulp = require('gulp');
var open = require('gulp-open');
 
 
// Open an URL: 
 
gulp.task('open', ['less', 'images', 'fonts', 'markup', 'watch'], function(){
  var options = {
    url: 'http://localhost:3000'
  };
  gulp.src('')
  .pipe(open('', options));
});

 
// Default usage: 
// Open one file with default application 
 
// gulp.task('open', function(){
//   gulp.src('./index.html')
//   .pipe(open('<%file.path%>'));
// });
 
 
// Open all .html files in a folder with a defined application 
 
// gulp.task('open', function(){
//   gulp.src('./htdocs/*.html')
//   .pipe(open('<%file.path%>', {app: 'google-chrome'}));
// });
 
 
// Simple usage, no options. 
// This will use the default applications 
 
// gulp.task('simple', function(){
//   gulp.src('./index.html')
//   .pipe(open());
// });
 
 

// A file must be specified as the src when running options.url or gulp will overlook the task. 
 
 
 
 
// Run the task with gulp 
 
// gulp.task('default', ['open']);