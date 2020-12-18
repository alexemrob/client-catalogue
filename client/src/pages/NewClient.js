import React from "react";
import { ClientForm } from "../components/ClientForm";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const NewClient = () => {
  const history = useHistory()

  const onSubmit = async (data) => {
    const clientData = await API.saveClient(data)
    console.log(clientData.data);
    toast(`${data.name} was successfully added!`, { type: "success" });
    history.push("/")
  };

  return (
    <div className="container">
      <h3>Add New Client:</h3>
      <div className="new-form">
        <ClientForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default NewClient;