const express = require('express');
const mongoose = require('mongoose');
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
const route = require('./routes/notes.js');
app.use('/notes', route);
