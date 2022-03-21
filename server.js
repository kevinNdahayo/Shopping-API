const http = require("http");
// importing app
const app = require('./app')
const port = process.env.PORT || 3000;
const server = http.createServer(app)
server.listen(port); 