const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const StatusCodes = require("../constants/status.codes");
const isAuthenticated = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(
        res.status(StatusCodes.BAD_REQUEST).json({
          error: "Invalid Token Authorization",
          message: "Please login to access the data",
        })
      );
    }
    const verify = await jwt.verify(
      authorization,
      process.env.SEED_AUTHENTICATION
    );
    if (verify) {
      req.user = await UserModel.findById(verify.userId);
      next();
    } else {
      return next(
        res.status(StatusCodes.UNAUTHORIZED).json({
          error: "Invalid Token Authorization",
          message: "Token Invalid",
        })
      );
    }
  } catch (error) {
    return next(
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Invalid Token Authorization", message: error.message })
    );
  }
};

module.exports = isAuthenticated;
