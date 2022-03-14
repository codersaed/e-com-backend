const router = require("express").Router();
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryControllers.js");
const admin = require("../middlewares/admin.js");
const authorize = require("../middlewares/authorize.js");

router.route("/").post([authorize, admin], createCategory).get(getCategories);

module.exports = router;
