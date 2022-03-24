const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: String,
    quantity: Number
})

module.exports = mongoose.model('Orders', orderSchema) 