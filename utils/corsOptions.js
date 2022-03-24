const cors = require('cors')

const corsOptions = {
  origin: 'http://mackeefy.netlify.app',
  optionsSuccessStatus: 200
}

module.exports = cors(corsOptions);