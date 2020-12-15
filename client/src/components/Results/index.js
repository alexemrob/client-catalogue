import React, { Component, useEffect, useState} from "react";
import API from "../../utils/API";
// import '../Search/node_modules/bootstrap/dist/css/bootstrap.min.css';
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

        if (client.saved) {
            console.log(client)
            API.deleteClient(client._id)
                .then(deletedClient => this.setState({ savedClients: this.state.savedClients.filter(client => client._id !== deletedClient._id) }))
                .catch(err => console.error(err));
        } else {
            console.log(client)
            API.updateToday(client)
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
                                                <p>{result.phone}</p>
                                                <p> {result.email}</p>
                                                <p>Referal: {result.referBy}</p>
                                                <p className="card-text">Formula: {result.notes}</p>
                                                <div className="d-flex justify-content-end">
                                                {/* <button className="btn btn-outline-dark mt-3 ml-3" >Edit
                                                    </button> */}
                                                    <button onClick={() => this.handleSave(result)} className="btn btn-outline-dark mt-3 ml-3" >
                                                        {result.saved ? "delete" : "save"}
                                                    </button>
                                                    <a href="www.instagram.com/{result.insta}" className="btn btn-outline-dark mt-3" target="_blank" ><FaInstagram/></a>
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
