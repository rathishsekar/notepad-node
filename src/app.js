const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/notes.js');

const app = express();
const url = 'mongodb://localhost:27017/notes';
mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on('open', () => {
  console.log('connected to mongodb');
});
app.listen('9000', () => {
  console.log('server started');
});

app.use(express.json());
app.use('/', route);
