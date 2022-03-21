const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Handling Get request of orders"
    })
})


router.get('/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Order details for ${orderId}`
    })
})


router.post('/', (req, res) => {
    res.status(200).json({
        message: "Handling POST request of orders"
    })
})


router.delete('/', (req, res) => {
    res.status(200).json({
        message: "Handling delete request of orders"
    })
})


router.patch('/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Updating order details for ${orderId}`
    })
})
module.exports = router