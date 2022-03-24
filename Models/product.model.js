const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
})

const products = [
    {
        id: 0,
        name: "Laptop",
        price: 500
    },
    {
        id: 1,
        name: "Internet Router",
        price: 1500
    },

]
// module.exports = products
module.exports = mongoose.model('products', productSchema);