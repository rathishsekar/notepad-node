const app = require('./app.js');

const server = app.listen('9000', () => {
  console.log('server started');
});

module.exports = server;
