const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Order", orderSchema);
