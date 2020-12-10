import React, { Component } from "react";
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

class Results extends Component {
    state = {
        savedClients: [],
    }
    componentDidMount() {
        API.savedClients()
            .then(savedClients => this.setState({ savedClients: savedClients }))
            .catch(err => console.error(err));
    }

    handleSave = client => {

        if (this.state.savedClients.map(client => client._id).includes(client._id)) {
            API.deleteClient(client._id)
                .then(deletedClient => this.setState({ savedClients: this.state.savedClients.filter(client => client._id !== deletedClient._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveClient(client)
                .then(savedClient => this.setState({ savedClients: this.state.savedClients.concat([savedClient]) }))
                .catch(err => console.error(err));
        }
    }
    render() {
        return (
            <div className="results-card d-flex justify-content-center">
                {!this.props.clients.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.clients.map(result => (
                                <div className="box card mb-3" key={result._id}>
                                    <div className="row glass">
                                            <div className="card-body col-md-10">
                                                <h5 className="card-title">{result.name}</h5>
                                                <p>{result.phone} || {result.email}</p>
                                                <p>Referal: {result.referBy}</p>
                                                <p className="card-text">Formula: {result.notes}</p>
                                                <div className="d-flex justify-content-end">
                                                    <a href="www.instagram.com/{result.insta}" className="btn btn-outline-dark mt-3" target="_blank" >View IG</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn btn-outline-dark mt-3 ml-3" >
                                                        {this.state.savedClients.map(client => client._id).includes(result._id) ? "X" : "+ Today"}
                                                    </button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;
