const Products = require("../Models/product.model");
const mongoose = require('mongoose');

function getProductsMessage(req, res) {
    res.status(200).json({
        message: "Getting Products",
        AllProducts: Products
    })
}

function getProductsDetailsMessage(req, res) {
    const id = req.params.productId;
    Products.findById(id)
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "Getting single product",
                ProductDetails: doc
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

}

function postProductsMessage(req, res) {
    const product = new Products({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product.save()
        .then(result => {
            console.log(`Result ${result}`);
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
    res.status(200).json({
        message: "product created",
        product: product
    })
}

function updatingProductsMessage(req, res) {
    const id = req.params.productId;
    res.status(200).json({
        message: "Updating product"
    })
}


function deleteProductsMessage(req, res) {
    const id = req.params.productId
    res.status(200).json({
        message: "Deleted the product",
    })
}



module.exports = {
    getProductsMessage,
    getProductsDetailsMessage,
    updatingProductsMessage,
    deleteProductsMessage,
    postProductsMessage
}