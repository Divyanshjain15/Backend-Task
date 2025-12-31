const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/order", authMiddleware, orderController.createOrder);
router.get("/orders", authMiddleware, orderController.getOrders);

module.exports = router;
