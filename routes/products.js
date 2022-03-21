const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "message": "Handling GET request on products"
    })
})

router.get('/:productId', (req, res) => {
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
})

router.patch('/:productId', (req, res) => {
    res.status(200).json({
        "message": "Updating the product"
    })
})

router.delete('/:productId', (req, res) => {
    res.status(200).json({
        "message": "Deleted the product"
    })
})


router.post('/', (req, res) => {
    res.status(200).json({
        "message": "Handling Post requests on products"
    })
})

module.exports = router; 