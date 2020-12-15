import React from "react";
import { ClientForm } from "../components/ClientForm";
import {saveClient} from "../utils/API";
import { useHistory } from "react-router-dom";

export const NewClient = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await saveClient(data)
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