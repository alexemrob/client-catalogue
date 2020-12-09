import axios from "axios";

export default {
  getClient: function (query) {
    return axios.get(`/api/clients/${query}`);
  },
  // Deletes the client with the given id
  deleteClient: function (id) {
    return axios.delete("/api/clients/" + id).then(result => result.data);
  },
  // Saves a client to the database
  saveClient: function (clientData) {
    return axios.post("/api/clients", clientData).then(result => result.data);
  },
  // Get the saved a clients from the database
  savedClients: function () {
    return axios.get("/api/clients").then(result => result.data);
  }
};