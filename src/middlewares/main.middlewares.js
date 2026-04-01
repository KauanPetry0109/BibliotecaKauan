const logger = require('./logger.middlewares');
const errorHandler = require('./error.middlewares');
const { autenticar } = require('./aut.middlewares');
const { validarContentType } = require('./contentType.middlewares');

module.exports = { logger, errorHandler, validarContentType, autenticar };