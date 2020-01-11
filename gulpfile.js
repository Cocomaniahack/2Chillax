var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

function compile(){


 var bundle = watchify(browserify('./src/index.js'))




 function rebundle(){
 
        bundle
            .bundle()
            .pipe(source('index.js'))
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest('public'));

 }  


   bundle.on('update', function (ids){

           console.log('--> Bundling...'+ids);
           rebundle()

    })

   rebundle()

}

 gulp.task('default', function(){

   return compile();
 

 })




