const express = require('express')
const app = express()
const cors = require('cors')
const port = 3010
const Twitter = require('twitter')


// var Twit = require('twit')

// var T = new Twit({
//     consumer_key: '881flbXb16SbwdP3R2sRKvdji',
//     consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
//     access_token: '1132229170388332545-Cw7n7UQzfMXUn8fkKvU8g3JPUXG7iK',
//     access_token_secret: 'TZxdpxpwV5ys7F9bxZkK7hoW3ErpBJUfwBX6MZMINgCpg'
//     // timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
//     // strictSSL: true,     // optional - requires SSL certificates to be valid.
// })

// var stream = T.stream('statuses/filter', { track: 'mango' })

// stream.on('tweet', function (tweet) {
//     console.log(tweet)
// })


// now working

app.use(cors())


const twit = new Twitter({
    consumer_key: '881flbXb16SbwdP3R2sRKvdji',
    consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
    access_token_key: '1132229170388332545-Cw7n7UQzfMXUn8fkKvU8g3JPUXG7iK',
    access_token_secret: 'TZxdpxpwV5ys7F9bxZkK7hoW3ErpBJUfwBX6MZMINgCpg'
})


app.get('/tweets', (req, res) => {
    console.log(req.query)
    const incomingData = req.query.source



    // You can also get the stream in a callback if you prefer.
    twit.stream('statuses/filter', { track: incomingData }, function (stream) {

        stream.on('data', function (event) {
            io.emit('tweet', event);
        })

        stream.on('error', function (error) {
            console.log(error)
        })
    });
})

const server = app.listen(port, () => {
    console.log('listening on the port')
})

const socket = require('socket.io')
const io = socket(server)
