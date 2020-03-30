const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const { catchAll, notFound } = require('./error');

const app = express();

const resultRouter = require('./result/result.router');

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});


app.use('/api/results', resultRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
