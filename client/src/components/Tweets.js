import React, { useState } from 'react'
import axios from 'axios'
import io from "socket.io-client";

const socket = io('http://localhost:3010');


function Tweets(props) {
    const [input, setinput] = useState('');
    const [tweets, setTweets] = useState([])
    // const [theArray, setTheArray] = useState();

    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('input', input)
        setTweets([])

        axios.get(`http://localhost:3010/tweets?source=${input}`)
            .then(tweet => {
                console.log('response', tweet.data)
                setinput('')
            })
            .catch(err => alert(err))

        socket.on('tweet', function (data) {
            console.log('tweet', data)
            setTweets(tweets => [...tweets, data]);
        })

    }


    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <br />
            <h1> Tweets Page</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" id_str="tweet" placeholder="search for your tweet" value={input} onChange={handleChange} /> <br />

                <input type="submit" />
            </form>

            <br />
            <br />
            {
                tweets.map(tweet => {
                    return (
                        <li key={tweet.id}> {tweet.text} </li>
                    )
                })
            }
        </div>
    )
}

export default Tweets