'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');

app.use(cors());
app.use(express.json());

app.use('/api/v1/clothes', clothesRouter);
app.use('/api/v1/food', foodRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};