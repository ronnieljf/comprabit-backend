const StatusCodes = require("../constants/status.codes");
const userService = require("../services/user.service");

const registerUser = async (req, res) => {
  const user = await userService.registerUser(req.body);
  if (!user) {
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({
      error: "Entity Duplicated",
      message: "Email or Username already Exist",
    });
  }
  return res.status(StatusCodes.OK).json(user);
};

const userByEmail = async (req, res) => {
  const user = await userService.userByEmail(req.body.email);
  return res.status(StatusCodes.OK).json(user);
};

module.exports = {
  registerUser,
  userByEmail,
};
