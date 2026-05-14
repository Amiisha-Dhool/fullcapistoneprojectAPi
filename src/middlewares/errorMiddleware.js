const notFound = (req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
};

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
};

module.exports = {
  notFound,
  errorHandler,
};