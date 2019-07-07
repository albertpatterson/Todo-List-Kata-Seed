const gulp = require('gulp');
const Server = require('karma').Server;
const watch = require('gulp-watch');
const connect = require('gulp-connect');

gulp.task(
    'test',
    (done) => {
      new Server(
          {
            configFile: __dirname + '/karma.conf.js',
            singleRun: true,
          },
          done)
          .start();
    },
);

gulp.task(
    'watch-test',
    () => watch(['src/**/*'], gulp.series('test')),
)

gulp.task('test-watch-test', gulp.series('test', 'watch-test'));

gulp.task(
    'start-server',
    (done) => {
      connect.server({
        root: 'src/main',
        livereload: true,
        host: 'localhost',
        port: '8080',
      });
      done();
    },
);

gulp.task(
    'start-reload',
    (done) => {
      gulp.src(['src/main/*']).pipe(connect.reload());
      done();
    },
);

gulp.task(
    'watch-reload',
    (done) => {
      watch(['src/**/*'], gulp.series('start-reload'));
      done();
    },
);

gulp.task(
    'watch-run',
    gulp.parallel('start-server', 'watch-reload'),
);
