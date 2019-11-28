const errorHandler = (err, req, res, next) => {
  //log to console for dev
  console.error(err.stack.red);

  res.status(500).json({
    success: false,
    error: err.message
  });
};

module.exports = errorHandler;
