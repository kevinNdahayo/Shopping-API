const products = require("../Models/product.model");

function getProductsMessage(req, res) {
    res.status(200).json({
        message: "Getting Products",
        
    })
}

function getProductsDetailsMessage(req, res){
   const id = req.params.productId;
    res.status(200).json({
        message: "Getting single product",
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

function postProductsMessage(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        "message": "product created",
    })
}

module.exports = {
    getProductsMessage,
    getProductsDetailsMessage,
    updatingProductsMessage,
    deleteProductsMessage,
    postProductsMessage
}