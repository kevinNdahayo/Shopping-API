const express = require("express");
const app = express()

// importing productRoutes 
const productRoutes = require('./routes/products');
const orderRoutes = require("./routes/orders")

// importing Error handling controllers
const { errorMessage, errorMessageResponse } = require("./Controllers/errorHandling.controllers")

// Application Middlewares
app.use(express.json())
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
// Handling CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    
    if(req.method === 'OPTIONS'){
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE'
        )
        return res.status(200).json({});

    }
})
app.use(errorMessage)
app.use(errorMessageResponse)
module.exports = app;