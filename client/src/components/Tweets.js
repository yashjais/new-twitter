import React from 'react'
import axios from 'axios'

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
            .then(tweet => console.log(tweet))
            .catch(err => alert(err))
        input = ""
        this.setState({ input })
    }

    render() {
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