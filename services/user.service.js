const UserDTO = require("../dto/user.dto");
const ErrorDTO = require("../dto/error.dto");
const UserModel = require("../models/user.model");
const { sendRegisterEmail } = require("../email/templates");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//
const registerUser = async (data) => {
  const user = new UserDTO(data);
  const checkEmail = await UserModel.findOne({ email: user.email });
  if (checkEmail) {
    return new ErrorDTO("Invalid Email", "Email already exist");
  }
  // const checkUsername = await UserModel.findOne({ username: user.username });
  // if (checkUsername) {
  //   return new ErrorDTO("Invalid Username", "Username already exist");
  // }
  user.password = bcrypt.hashSync(user.password, 10);
  await UserModel.create(user);
  delete user.password;
  //sendRegisterEmail(user.email);
  return user;
};

const userByEmail = async (email) => {
  const user = await UserModel.findOne({ email });
  return user;
};

const userById = async (id) => {
  const user = await UserModel.findById(id);
  return user;
};

const login = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return new ErrorDTO("Invalid Email", "Email not exist");
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return new ErrorDTO("Invalid Password", "Password Incorrect");
  }
  let token = jwt.sign(
    { _id: user._id, email: user.email, username: user.username },
    process.env.SEED_AUTHENTICATION,
    {
      expiresIn: process.env.EXPIRED_TOKEN,
    }
  );
  return { token };
};

module.exports = {
  registerUser,
  userByEmail,
  userById,
  login,
};
