export const catchErrors = (fn) => (req, res, next) => fn(req, res, next).catch(next);

export const notFound = (req, res, next) => {
  const err = new Error('There is nothing here');
  err.status = 404;
  next(err);
};

export const productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
};

// module.exports = {
//   notFound,
//   productionErrors,
//   catchErrors,
// };
