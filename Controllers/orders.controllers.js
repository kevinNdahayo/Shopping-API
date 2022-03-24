// importing orders model
const { default: mongoose } = require('mongoose');
const Orders = require('../Models/orders.model')

function getOrdersMessage(req, res) {
    res.status(200).json({
        message: "Getting all orders",
    })
}

function orderDetailsMessage(req, res) {
    const orderId = req.params.orderId;
    Orders.findById(orderId)
        .exec()
        .then(doc => {
            res.status(200).json({
                Message: `Getting information for order ${orderId}`,
                OrderInfo: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    res.status(200).json({
        message: `Order details for ${orderId}`,
    })
}

function postOrdersMessage(req, res) {
    const order = new Orders({
        _id: new mongoose.Types.ObjectId(),
        product: req.body.product,
        quantity: req.body.quantity
    })
    order.save()
        .then(result => {
            console.log(`Result from db ${result}`);
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    res.status(200).json({
        message: "order was created",
        order: order
    })
}

function deleteOrdersMessage(req, res) {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Deleting order details for ${orderId}`,
    })
}

function updateOrderDetailsMessage(req, res) {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Updating order details for ${orderId}`,
    })
}

module.exports = {
    getOrdersMessage,
    orderDetailsMessage,
    postOrdersMessage,
    deleteOrdersMessage,
    updateOrderDetailsMessage
}