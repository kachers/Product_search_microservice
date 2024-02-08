const express = require('express');
const requestLogger = require('../middlewares/requestLogger');
const responseLogger = require('../middlewares/responseLogger');
const searchController = require('../controllers/controller');

const router = express.Router();

router.use(requestLogger);
router.get('/', searchController);
router.use(responseLogger);

module.exports = router;