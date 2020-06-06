const errorHandler = async (err, req, res, next) => {
  if (err.status) {
    return await res.status(err.status).send(err.message);
  }

  return await res.status(500).send('Internal server error');
};

module.exports = errorHandler;
