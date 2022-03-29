const _ = require("lodash");
const { CartItem } = require("../models/cartItem");



module.exports.getCartItem = async (req, res) => {
  const cartItems = await CartItem.find({
    user: req.user._id,
  })
    .populate("product", "name")
    .populate("user", "name");
  return res.status(200).send(cartItems);
};

module.exports.updateCartItem = async (req, res) => {
  const { _id, count } = _.pick(req.body, ["count", "_id"]);
  userId = req.user._id;
  await CartItem.updateOne({ _id: _id, user: userId }, { count: count });
  return res.status(200).send("Item updated!!");
};

module.exports.deleteCartItem = async (req, res) => {
  const _id = req.params.id;
  userId = req.user._id;
  await CartItem.deleteOne({ _id: _id, user: userId });
  return res.status(200).send("Deleted!");
};
