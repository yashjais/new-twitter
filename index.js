const express = require('express')
const app = express()
const cors = require('cors')
const port = 3010
// const Twitter = require('twitter')  // not working
/*
// not working

const twit = new Twitter({
    consumer_key: '881flbXb16SbwdP3R2sRKvdji',
    consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
    access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
    access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
})

// You can also get the stream in a callback if you prefer.
twit.stream('statuses/filter', { track: 'javascript' }, function (stream) {

    stream.on('data', function (event) {
        console.log(event)
    })

    stream.on('error', function (error) {
        console.log(error)
    })
});
*/


app.listen(port, () => {
    console.log('listening on the port', port)
})