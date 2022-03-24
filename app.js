const express = require("express");
const app = express()

// importing productRoutes 
const productRoutes = require('./routes/products');
const orderRoutes = require("./routes/orders")

// Importing CORS Middleware
const corsMiddleware = require('./utils/corsOptions')

// importing Error handling controllers
const { errorMessage, errorMessageResponse } = require("./Controllers/errorHandling.controllers")

// Application Middlewares
app.use(corsMiddleware)
app.use(express.json())
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use(errorMessage)
app.use(errorMessageResponse)
module.exports = app;