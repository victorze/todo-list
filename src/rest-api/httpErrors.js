class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'Bad Request';
    this.status = 400;
    this.name = 'BadRequestError';
  }
}

module.exports = {
  BadRequestError,
};
