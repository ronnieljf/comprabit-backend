const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();
const isAuthenticated = require("../middlewares/auth.middleware");

const {
  registerUser,
  userByEmail,
  login,
  user,
} = require("../controllers/user.controller");

const { getPrice } = require("../controllers/prices.controller");

//User
router.post("/user/register-user", registerUser);
router.post("/user/user-by-email", isAuthenticated, userByEmail);
router.post("/user/login", login);
router.get("/user", isAuthenticated, user);
module.exports = router;

//currencies
