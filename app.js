const express = require("express");
const app = express()

// Middleware functions 
app.use((req, res , next) => {
    res.status(200).json({
        message: "Server is working"
    })
})

module.exports = app;