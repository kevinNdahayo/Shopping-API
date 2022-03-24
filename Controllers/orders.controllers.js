// importing orders model
const orders = require("../Models/orders.model");

function getOrdersMessage(req, res) {
    res.status(200).json({
        message: "Getting all orders",
        orders: orders
    })
}

function orderDetailsMessage(req, res){
    const orderId = req.params.orderId;
    const orderDetailInfo = orders[orderId];
    res.status(200).json({
        message: `Order details for ${orderId}`,
        orderInfo: orderDetailInfo
    })
}

function postOrdersMessage(req, res) {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    orders.push(order);
    res.status(200).json({
        message: "order was created",
        order: order
    })
}

function deleteOrdersMessage(req, res) {
    const orderId = req.params.orderId;
    const orderToDelete = orders[orderId];
    const indexOrder = orders.indexOf(orderToDelete);
    orders.splice(indexOrder, 1);
    res.status(200).json({
        message: `Deleting order details for ${orderId}`,
        deletedOrder: orderToDelete,
        remainingOrders: orders
    })
}

function updateOrderDetailsMessage(req, res){
    const orderId = req.params.orderId;
    const updatedOrderInfo = orders[orderId]
    res.status(200).json({
        message: `Updating order details for ${orderId}`,
        updatedOrder: updatedOrderInfo,
    })
}

module.exports = {
    getOrdersMessage,
    orderDetailsMessage,
    postOrdersMessage,
    deleteOrdersMessage,
    updateOrderDetailsMessage
}