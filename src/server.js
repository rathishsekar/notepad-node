const app = require('./app.js');
require('dotenv').config();

const server = app.listen('9000', () => {
  console.log('server started');
});

module.exports = server;
