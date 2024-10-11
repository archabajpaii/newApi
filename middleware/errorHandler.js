const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  switch (statusCode) {
    case 400:
      res.json({ title: "Bad request", message: err.message });
      break;
    case 401:
      res.json({ title: "not authporiosed request", message: err.message });
      break;
    case 403:
      res.json({ title: "forbidden ", message: err.message });
      break;
    case 404:
      res.json({ title: "not found", message: err.message });
      break;

    default:
      res.json({ title: "not found", message: err.message });
      break;
  }
};
module.exports = { errorHandler };
