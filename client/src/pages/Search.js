import React from "react";
import Form from "../components/Search";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        clients: []
    };

    componentDidMount() {
        this.searchClient();
    }

    makeClient = clientData => {
        return {
            _id: clientData.id,
            name: clientData.name,
            phone: clientData.phone,
            email: clientData.email,
            referBy: clientData.referBy,
            notes: clientData.notes,
            insta: clientData.insta
        }
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
                    <h2>Results</h2>
                    <Results clients={this.state.clients} />
                </div>
            </div>
        )
    }
}

export default Search;