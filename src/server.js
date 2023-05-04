const app = require('./app.js');
require('dotenv').config();

app.listen('9000', () => {
  console.log('server started');
});

module.exports = app;
