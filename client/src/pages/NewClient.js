import React from "react";
import { ClientForm } from "../components/ClientForm";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

export const NewClient = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    const clientData = await API.saveClient(data)
    console.log(clientData.data);
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>YAY! New Client!</h3>
        <ClientForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default NewClient;