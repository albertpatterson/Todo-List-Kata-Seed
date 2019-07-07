const gulp = require('gulp');
const Server = require('karma').Server;
const watch = require('gulp-watch');
const connect = require('gulp-connect');

gulp.task('test', (done) => {
  new Server(
      {
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
      },
      done)
      .start();
});

gulp.task('watch-test', () => watch(['src/**/*'], gulp.series('test')))

gulp.task('run', () => connect.server({root: 'src/main', livereload: true}));

gulp.task('reload', () => gulp.src(['src/main/*']).pipe(connect.reload()));

gulp.task('watch-reload', () => watch(['src/**/*'], gulp.series('reload')));

gulp.task('watch-run', gulp.parallel('run', 'watch-reload'));
