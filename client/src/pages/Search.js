import React, { useState, useEffect } from "react";
import Form from "../components/Search";
import Results from "../components/Results";
// import Clientelle from "../components/Clientelle";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        clients: []
    };

    componentDidMount() {
        this.searchClient();
    }

    searchClient = query => {
        console.log(query)
        API.getClient(query)
            .then(res =>{
                console.log(res)
                this.setState({ clients: res.data })
            }) 
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchClient(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <Results clients={this.state.clients} />
                    {/* <Clientelle /> */}
                </div>
            </div>
        )
    }
}

export default Search;