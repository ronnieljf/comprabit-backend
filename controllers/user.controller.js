const StatusCodes = require("../constants/status.codes");
const userService = require("../services/user.service");
const ErrorDTO = require("../dto/error.dto");

const registerUser = async (req, res) => {
  const user = await userService.registerUser(req.body);
  if (user.error) {
    return res.status(StatusCodes.UNAUTHORIZED).json(user);
  }
  return res.status(StatusCodes.OK).json(user);
};

const userByEmail = async (req, res) => {
  const user = await userService.userByEmail(req.body.email);
  return res.status(StatusCodes.OK).json(user);
};

const login = async (req, res) => {
  const user = await userService.login(req.body.email, req.body.password);
  if (user.error) {
    return res.status(StatusCodes.UNAUTHORIZED).json(user);
  }
  return res.status(StatusCodes.OK).json(user);
};

module.exports = {
  registerUser,
  userByEmail,
  login,
};
