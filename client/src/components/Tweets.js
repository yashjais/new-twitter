import React, { useState } from 'react'
import axios from 'axios'
import io from "socket.io-client";

const socket = io('http://localhost:3010/tweet');


function Tweets(props) {
    const [input, setinput] = useState('');

    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        // let input = this.state.input
        // axios.get(`http://localhost:3010/tweets?source=${input}`)
        //     .then(tweet => {
        //         console.log(tweet.data)
        //     })
        //     .catch(err => alert(err))

        // socket.emit('incomingData',);

        // socket.on('check', function (data) {
        //     console.log(data)
        // })

        // input = ""
        // this.setState({ input })

        // socket.on('tweet', function (data) {
        //     console.log(data)
        // })
    }


    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <br />
            <h1> Tweets Page</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="tweet">tweet</label>
                <input type="text" id="tweet" placeholder="search for your tweet" value={input} onChange={handleChange} /> <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Tweets