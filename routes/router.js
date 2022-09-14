const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();

const { test, myName } = require("../controllers/test.controller");
const { registerUser, userByEmail } = require("../controllers/user.controller");

router.get("/test", test);
router.get("/my-name", myName);

//User
router.post("/user/register-user", registerUser);
router.post("/user/user-by-email", userByEmail);

module.exports = router;
