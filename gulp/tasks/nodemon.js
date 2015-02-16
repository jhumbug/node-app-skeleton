var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    config = require('../config');
var open = require('gulp-open');


var browserifyTask = require('./browserify')
var browserSync = require('browser-sync');


gulp.task('nodemon', function(cb) {
    // We use this `called` variable to make sure the callback is only executed once
    var called = false;
    return nodemon(config.nodemon.options)
        // .on('change',  function onChange() {
        //     console.log('change');
        // })
        .on('start', function onStart() {
            if (!called) {

                gulp.watch(config.less.watchSrc, ['less']);
                gulp.watch(config.images.src, ['images']);
                gulp.watch(config.markup.src, ['markup']);

                browserifyTask(function() {}, true);

      //           var options = {
				  //   url: 'http://localhost:3000'
				  // };
				  // open('', options)

                // browserSync(config.browserSync);
             
                cb();
            }
            called = true;
        })
        .on('restart', function onRestart() {
            console.log('restart11');
            // Also reload the browsers after a slight delay
            setTimeout(function reload() {
              	browserSync.reload({
              		stream: false
              	});
            }, 500);
        });

    // nodemon(config.options)
    //     .on('change', ['build'])
    //     .on('start', ['build', 'watch'])
    //     .on('restart', function() {
    //         console.log('restarted!')
    //     })
})
