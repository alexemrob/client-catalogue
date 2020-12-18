import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from 'react-router-dom'
import './style.css'
import { FaInstagram } from "react-icons/fa";

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
            API.addClient(client)
                .then(savedClient => this.setState({ savedClients: this.state.savedClients.concat([savedClient]) }))
                .catch(err => console.error(err));
        }
    }


    render() {
        return (
            <div className="results-card d-flex justify-content-start">
                {!this.props.clients.length ? (
                    <h4 className="text-center">No Results to Display</h4>
                ) : (
                        <div>
                            {this.props.clients.map(result => (
                                <div className="box card mb-3" >
                                    <div className="row glass">
                                        <div className="card-body col-md-10">
                                            <h2 className="card-title" key={result._id}>{result.name}</h2>
                                            <p><b>Phone Number:</b> {result.phone}</p>
                                            <p><b>Email Address: </b>{result.email}</p>
                                            <p><b>Referal: </b>{result.referBy}</p>
                                            <p className="card-text"><b>Formula + Notes: </b>{result.notes}</p>
                                            <div className="d-flex justify-content-end">
                                                <Link className="btn btn-outline-dark mt-3" to={`/edit/${result._id}`}>Edit</Link>
                                                <button onClick={() => this.handleSave(result)} className="btn btn-outline-dark mt-3 ml-3" >
                                                    {this.state.savedClients.map(client => client._id).includes(result._id) ? "- Today" : "+ Today"}
                                                </button>
                                                <a className="btn btn-outline-dark mt-3" target="_blank" href={`www.instagram.com/${result.insta}`}><FaInstagram /></a>
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
