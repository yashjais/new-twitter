import React, { useState } from 'react'
import axios from 'axios'
import io from "socket.io-client";

const socket = io('http://localhost:3010');


function Tweets(props) {
    const [input, setinput] = useState('');

    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('input', input)

        axios.get(`http://localhost:3010/tweets?source=${input}`)
            .then(tweet => {
                console.log('response', tweet.data)
            })
            .catch(err => alert(err))

        socket.on('tweet', function (data) {
            console.log('tweet', data)
        })

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