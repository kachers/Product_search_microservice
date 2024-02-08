require('dotenv').config();

const express = require('express');
const cors = require('cors');
const requestLogger = require('./src/api/middlewares/requestLogger');
const responseLogger = require('./src/api/middlewares/responseLogger');
const searchRouter = require('./src/api/controllers/controller');

const PORT = process.env.PORT
const app = express();

app.use(cors());
app.use(requestLogger);
app.use(responseLogger);

app.use('/api/search', searchRouter);

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Server running on port ${PORT}`);
  }
});

module.exports = app;