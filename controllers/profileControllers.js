const _ = require("lodash");
const { Profile } = require("../models/profile.js");

module.exports.getProfile = async (req, res) => {
  const userId = req.user._id;
  const profile = await Profile.findOne({ user: userId });
  return res.status(200).send(profile);
};

module.exports.setProfile = async (req, res) => {};
