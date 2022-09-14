const StatusCodes = require("../constants/status.codes");
const userService = require("../services/user.service");
const ErrorDTO = require("../dto/error.dto");

const registerUser = async (req, res) => {
  const user = await userService.registerUser(req.body);
  if (!user) {
    const error = new ErrorDTO(
      "Entity Duplicated",
      "Email or Username already exist"
    );
    return res.status(StatusCodes.NOT_ACCEPTABLE).json(error);
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
