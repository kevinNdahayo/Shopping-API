const express = require("express");
const app = express()
const mongoose = require("mongoose");
require("dotenv").config()

// importing productRoutes 
const productRoutes = require('./routes/products');
const orderRoutes = require("./routes/orders")

// Importing CORS Middleware
const corsMiddleware = require('./utils/corsOptions')

// importing Error handling controllers
const { errorMessage, errorMessageResponse } = require("./Controllers/errorHandling.controllers")

// Connection to db
mongoose.connect(
    `mongodb+srv://kevin:${process.env.MONGOPWD}@cluster0.iygo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
{
    useMongoClient: true
}

// Application Middlewares
app.use(corsMiddleware)
app.use(express.json())
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use(errorMessage)
app.use(errorMessageResponse)
module.exports = app;