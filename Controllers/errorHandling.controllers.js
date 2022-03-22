function errorMessage(req, res, next) {
    const error = new Error("Page Not Found ");
    error.status = 404;
    next(error)
}

function errorMessageResponse(error, req, res, next) {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
}

module.exports = {
    errorMessage,
    errorMessageResponse
}