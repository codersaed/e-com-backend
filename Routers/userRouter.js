const router = require("express").Router();
const { signin, signup } = require("../controllers/userControllers.js");

router.route("/signup").post(signup);

router.route("/signin").post(signin);

module.exports - router;
