const Server = require('karma').Server;
const watch = require('watch');

const port = 9876;
let server;

server = new Server(
  {port, configFile: __dirname + '/karma.conf.js', singleRun: true, },
  () => console.log('test done!'));

server.start();

server.on('browser_complete', (browser) => {
  process.exit(0);
});