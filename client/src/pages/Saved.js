import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Todo from "../components/Notes/TodoList"
import "../App.css"

class Saved extends Component {
    state = {
        savedClients: [],
    }

    componentDidMount() {
        API.savedClients()
            .then(savedClients => this.setState({ savedClients: savedClients }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                            <Todo />
                <h2>Today's clients</h2>
                <Results clients={this.state.savedClients} />
            </div>
        )
    }
}

export default Saved;