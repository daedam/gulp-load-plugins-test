import gulp from 'gulp';
import change from 'gulp-change';

gulp.task('go', changeContent);

function changeContent() {
    return gulp
        .src('in/**/*')
        .pipe(change((content, done) => {
            content = content.replace(/foo/ig, 'bar');
            done(null, content);
        }))
        .pipe(gulp.dest('out'));
}