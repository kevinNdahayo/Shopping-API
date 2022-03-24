const products = require("../Models/product.model");

function getProductsMessage(req, res) {
    res.status(200).json({
        message: "Getting Products",
        products: products
    })
}

function getProductsDetailsMessage(req, res){
   const id = req.params.productId;
   const individualProduct = products[id]
    res.status(200).json({
        message: "Getting single product",
        product: individualProduct
    })
}


function updatingProductsMessage(req, res) {
    const id = req.params.productId;
    const updatedProductDetails = products[id]
    products.splice(updatedProductIndex, 1)
    res.status(200).json({
        message: "Updating product",
        updatedProduct: updatedProductDetails
    })
}


 function deleteProductsMessage(req, res) {
     const id = req.params.productId
     const productToDelete = products[id]
     const deleteProductIndex = products.indexOf(productToDelete)
     products.splice(deleteProductIndex, 1)
    res.status(200).json({
        message: "Deleted the product",
        deletedProduct: productToDelete,
        remainingProducts: products
    })
}

function postProductsMessage(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        "message": "product created",
        product: product
    })
}

module.exports = {
    getProductsMessage,
    getProductsDetailsMessage,
    updatingProductsMessage,
    deleteProductsMessage,
    postProductsMessage
}