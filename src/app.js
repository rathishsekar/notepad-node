const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/notes.js');
const swaggerJsDoc = require('swagger-jsDoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const url = 'mongodb://localhost:27017/notes';
mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on('open', () => {
  console.log('connected to mongodb');
});

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

const swaggerspec = swaggerJsDoc(options);
app.use(express.json());
app.use('/', route);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerspec));

app.listen('9000', () => {
  console.log('server started');
});
