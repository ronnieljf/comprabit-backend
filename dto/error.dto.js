class ErrorDTO {
  error;
  message;
  constructor(error, message) {
    this.error = error;
    this.message = message;
  }
}

module.exports = ErrorDTO;
