const express = require("express");
const router = express.Router();

// Importing products Controller
const { getProductsMessage,
    getProductsDetailsMessage,
    updatingProductsMessage,
    deleteProductsMessage,
    postProductsMessage } = require("../Controllers/products.controllers");

router.get('/', getProductsMessage);
router.get('/:productId', getProductsDetailsMessage);
router.patch('/:productId', updatingProductsMessage);
router.delete('/:productId',deleteProductsMessage);
router.post('/', postProductsMessage);

module.exports = router; 