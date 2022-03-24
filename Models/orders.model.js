const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    quantity: Number
})

const orders = [
    {
        productId: 0,
        quantity: 5
    },
    {
        productId: 1,
        quantity: 10
    },
]
module.exports = mongoose.model('orders', orderSchema)