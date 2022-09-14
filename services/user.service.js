const UserDTO = require("../dto/user.dto");
const ErrorDTO = require("../dto/error.dto");
const UserModel = require("../models/user.model");
const registerUser = async (data) => {
  const user = new UserDTO(data);
  const check = await UserModel.findOne({
    $or: [{ email: user.email, username: user.username }],
  });
  if (check) {
    return null;
  }
  await UserModel.create(user);
  return user;
};

const userByEmail = async (email) => {
  const user = await UserModel.findOne({ email });
  return user;
};

const login = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return new ErrorDTO("Invalid Email", "Email not exist");
  }
  if (user.password != password) {
    return new ErrorDTO("Invalid Password", "Password Incorrect");
  }
  return user;
};

module.exports = {
  registerUser,
  userByEmail,
  login,
};
