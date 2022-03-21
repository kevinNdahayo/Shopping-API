const express = require("express");
const app = express()

// importing productRoutes 
const productRoutes = require('./routes/products');
const orderRoutes = require("./routes/orders")

// Application Routes
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
module.exports = app;