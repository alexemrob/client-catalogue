import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import API from "../../utils/API";
// import { FaInstagram } from "react-icons/fa";

// export const Clientelle = () => {
//     const [items, setItems] = useState([])

//     useEffect(() => {
//       const fetchItems = async () => {
//         const clients = await API.getClients()
//         setItems(clients)
//       }
//       fetchItems()
//       console.log(items)
//     }, [])
function Clientelle() {
    // Setting our component's initial state
    const [clients, setClients] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all clients and store them with setClients
    useEffect(() => {
      loadClients()
    }, [])
  
    // Loads all clients and sets them to clients
    function loadClients() {
      API.getClients()
        .then(res => 
          setClients(res.data)
        )
        .catch(err => console.log(err));
    };
  
    // // Deletes a client from the database with a given id, then reloads clients from the db
    // function deleteClient(id) {
    //   API.deleteClient(id)
    //     .then(res => loadClients())
    //     .catch(err => console.log(err));
    // }


    return (
        <div className="results-card d-flex justify-content-start"> (
                <div>
                    {clients.map (client => (
                        <div className="box card mb-3" >
                            <div className="row glass">
                                    <div className="card-body col-md-10">
                                        <h2 className="card-title" key={client._id}>{client.name}</h2>
                                        <p>{client.phone}</p>
                                        <p> {client.email}</p>
                                        <p>Referal: {client.referBy}</p>
                                        <p className="card-text">Formula: {client.notes}</p>
                                        <div className="d-flex justify-content-end">
                                        <Link to={`/edit/${client._id}`}>Edit</Link>
                                            <a className="btn btn-outline-dark mt-3"  href="www.instagram.com/"{...client.insta}><FaInstagram/></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
    </div>
    );
};
export default Clientelle;