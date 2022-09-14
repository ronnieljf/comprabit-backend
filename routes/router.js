const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();
const isAuthenticated = require("../middlewares/auth-middleware.service");

const { test, myName } = require("../controllers/test.controller");
const {
  registerUser,
  userByEmail,
  login,
  user,
} = require("../controllers/user.controller");

router.get("/test", test);
router.get("/my-name", myName);

//User
router.post("/user/register-user", registerUser);
router.post("/user/user-by-email", isAuthenticated, userByEmail);
router.post("/user/login", login);
router.get("/user", isAuthenticated, user);
module.exports = router;
