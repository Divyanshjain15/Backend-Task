const Order = require("../models/Order");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  const { product_name, quantity } = req.body;

  if (!product_name || !quantity)
    return res.status(400).json({ message: "All fields required" });

  const order = await Order.create({
    product_name,
    quantity,
    user: req.userId,
  });

  res.status(201).json(order);
};

// GET USER ORDERS
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.userId });
  res.json(orders);
};
