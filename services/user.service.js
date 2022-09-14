const UserDTO = require("../dto/user.dto");
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
    return { error: "Invalid Email", message: "Email not exist" };
  }
  if (user.password != password) {
    return { error: "Invalid Password", message: "Password Incorrect" };
  }
  return user;
};

module.exports = {
  registerUser,
  userByEmail,
  login,
};
