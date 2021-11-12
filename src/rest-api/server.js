const express = require('express');
const logger = require('morgan');
const { notFound, productionErrors } = require('./middleware/errors');

const app = express();

app.use(logger('dev', { skip: () => process.env.NODE_ENV === 'test' }));
app.use(express.json());
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Starting development server at http://localhost:${PORT}`);
  }
});

app.use(notFound);
app.use(productionErrors);

module.exports = {
  app,
  server,
};
