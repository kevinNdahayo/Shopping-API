const express = require("express");
const router = express.Router();
// importing orders controller
const { getOrdersMessage,
    orderDetailsMessage,
    postOrdersMessage,
    deleteOrdersMessage,
    updateOrderDetailsMessage 
} = require("../Controllers/orders.controllers");

router.get('/', getOrdersMessage)
router.get('/:orderId', orderDetailsMessage)
router.post('/', postOrdersMessage)
router.delete('/:orderId', deleteOrdersMessage)
router.patch('/:orderId', updateOrderDetailsMessage)

module.exports = router