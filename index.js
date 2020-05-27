const express = require('express')
const app = express()
const cors = require('cors')
const port = 3010
const twitter = require('twitter')

app.listen(port, () => {
    console.log('listening on the port', port)
})