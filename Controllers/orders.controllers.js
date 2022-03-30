// importing orders model
const { default: mongoose } = require('mongoose')
const Orders = require('../Models/orders.model')

function getOrdersMessage(req, res) {
  Orders.find()
    .select('_id product quantity')
    .exec()
    .then((doc) => {
      res.status(200).json({
        message: 'Getting all orders',
        doc: doc,
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
}

function orderDetailsMessage(req, res) {
  const orderId = req.params.orderId
  Orders.findById(orderId)
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc)
      } else {
        res.status(404).json({
          mesage: 'Invalid Entries',
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
}

function postOrdersMessage(req, res) {
  const order = new Orders({
    _id: new mongoose.Types.ObjectId(),
    product: req.body.product,
    quantity: req.body.quantity,
  })
  order
    .save()
    .then((result) => {
      console.log(`Docs posted to db ${result}`)
      res.status(200).json({
        message: 'order was created',
        order: order,
      })
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
      res.status(500).json({
        error: err,
      })
    })
}

function deleteOrdersMessage(req, res) {
  const orderId = req.params.orderId
  Orders.remove({ _id: orderId })
    .then((result) => {
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({
          message: 'No resources Deleted',
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
}

function updateOrderDetailsMessage(req, res) {
  const orderId = req.params.orderId
  res.status(200).json({
    message: `Updating order details for ${orderId}`,
  })
}

module.exports = {
  getOrdersMessage,
  orderDetailsMessage,
  postOrdersMessage,
  deleteOrdersMessage,
  updateOrderDetailsMessage,
}
