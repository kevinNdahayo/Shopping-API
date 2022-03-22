function getProductsMessage(req, res) {
    res.status(200).json({
        "message": "Handling GET request on products"
    })
}

function getProductsDetailsMessage(req, res){
   const id = req.params.productId;
   if(id === "special") {
       res.status(200).json({
           message: "You discovered the special Id"
       })
   } 
   else {
    res.status(200).json({
        message: "You passed and Id"
    })
   }
}


function updatingProductsMessage(req, res) {
    res.status(200).json({
        "message": "Updating the product"
    })
}


 function deleteProductsMessage(req, res) {
    res.status(200).json({
        "message": "Deleted the product"
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