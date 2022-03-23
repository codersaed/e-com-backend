const router = require("express").Router();
const {
  setProfile,
  getProfile,
} = require("../controllers/profileControllers.js");
const authorize = require("../middlewares/authorize");

router.route("/").post(authorize, setProfile).get(authorize, getProfile);

module.exports = router;
