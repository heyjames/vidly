const winston = require('winston');

module.exports = function(err, req, res, next) {
  // Log the exception
  winston.error(err.message, err)

  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send('Something failed.'); // This only works for erros that happen in the req processing pipeline. It will ignore anything outside the context of Express.
}