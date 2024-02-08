const express = require('express');
const cors = require('cors');
const requestLogger = require('./api/middlewares/requestLogger');
const responseLogger = require('./api/middlewares/responseLogger');
const searchRouter = require('./api/routes/search');

const PORT = 8080;
const app = express();

app.use(cors());
app.use(requestLogger);
app.use(responseLogger);

app.use('/api/search', searchRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});