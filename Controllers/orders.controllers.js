// importing orders model

function getOrdersMessage(req, res) {
    res.status(200).json({
        message: "Getting all orders"
    })
}

function orderDetailsMessage(req, res){
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Order details for ${orderId}`
    })
}

function postOrdersMessage(req, res) {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: "order was created",
        order: order
    })
}

function deleteOrdersMessage(req, res) {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Deleting order details for ${orderId}`
    })
}

function updateOrderDetailsMessage(req, res){
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Updating order details for ${orderId}`
    })
}

module.exports = {
    getOrdersMessage,
    orderDetailsMessage,
    postOrdersMessage,
    deleteOrdersMessage,
    updateOrderDetailsMessage
}