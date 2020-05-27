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
        const input = ""
        this.setState({ input })
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <h1 style={{ textAlign: "center" }}> Tweets Page</h1>
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