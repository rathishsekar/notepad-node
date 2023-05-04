const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/notes.js');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const url = process.env['MONGO_DB_URI'] + '/' + process.env['DB_NAME'];
mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on('open', () => {
  console.log('connected to mongodb');
});

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'notepad application',
      version: '1.0.0',
    },
  },
  apis: ['spec.yaml'],
};

app.use(express.json());
app.use('/', route);
const swaggerspec = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerspec));

module.exports = app;
