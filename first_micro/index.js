// install express with `npm install express` 
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! NodeJs is running...'))

// export 'app'
module.exports = app