import React from 'react'
import axios from 'axios'
import io from "socket.io-client";

const socket = io('http://localhost:3010/tweet');


class Tweets extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        const input = e.target.value
        this.setState({ input })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        let input = this.state.input
        axios.get(`http://localhost:3010/tweets?source=${input}`)
            .then(tweet => {
                console.log(tweet.data)
            })
            .catch(err => alert(err))

        // socket.emit('incomingData',);

        // socket.on('check', function (data) {
        //     console.log(data)
        // })

        input = ""
        this.setState({ input })

        // socket.on('tweet', function (data) {
        //     console.log(data)
        // })
    }

    render() {
        socket.on('incomingData', function (data) {
            console.log(data)
        })
        return (
            <div style={{ textAlign: "center" }}>
                <br />
                <br />
                <h1> Tweets Page</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="tweet">tweet</label>
                    <input type="text" id="tweet" placeholder="search for your tweet" value={this.state.input} onChange={this.handleChange} /> <br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Tweets