
if (process.env.NODE_ENV == "development") {
  module.exports = require('./lib/react-simple-audio.js')
} else {
  module.exports = require('./lib/react-simple-audio.min.js')
}

