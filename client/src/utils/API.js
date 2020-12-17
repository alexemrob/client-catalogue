import axios from "axios";

export default {
  //get all clients from my db
  getClients: function () {
    return axios.get("/api/clients");
  },
  //search engline to grab what theyre searching
  getClient: function (query) {
    if (query === "")
      return;
    return axios.get(`/api/clients?search=${query}`);
  },
  // Saves a NEW client to the database
  saveClient: function (clientData) {
    return axios.post("/api/clients", clientData);
  },



  // Deletes the client with the given id from SAVED
  deleteClient: function (id) {
    return axios.delete("/api/clients/delete/" + id).then(result => result.data);
  },
  // Saves an existing client to SAVED
  addClient : function (clientData) {
    return axios.post("/api/clients/saved/" + clientData._id);
  },
  // Get the SAVED clients from the database
  savedClients: function () {
    return axios.get("/api/clients/saved2").then(result => result.data);
  },




  //edit
  updateEdit: function (id) {
    return axios.post("/api/clients/" + id)
  },
  //edit
  findClient: function (id) {
    return axios.get("/api/clients/" + id)
  }
};