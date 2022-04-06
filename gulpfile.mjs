import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('go', changeContent);

function changeContent() {
    return gulp
        .src('in/**/*')
        .pipe($.change((content, done) => {
            content = content.replace(/foo/ig, 'bar');
            done(null, content);
        }))
        .pipe(gulp.dest('out'));
}