const { check } = require("express-validator");
const { Router } = require("express");
const router = Router();

const { test } = require("../controllers/test.controller");

router.get("/test", test);

module.exports = router;
