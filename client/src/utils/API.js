import axios from "axios";

export default {
  getClients: function () {
    return axios.get("/api/clients");
  },
  getClient: function (query) {
    if (query === "")
      return;
    return axios.get(`/api/clients?search=${query}`);
  },
  // Deletes the client with the given id
  deleteClient: function (id) {
    return axios.delete("/api/clients/delete/" + id).then(result => result.data);
  },
  // Saves a client to the database
  saveClient : function (clientData) {
    return axios.post("/api/clients", clientData);
  },
  // Get the saved a clients from the database
  savedClients: function () {
    return axios.get("/api/clients").then(result => result.data);
  },
  updateClient: function (id) {
    return axios.post(`/api/clients/${id}/`)
  },
  findClient: function (id) {
    return axios.get("/api/clients/" + id)
  }
};