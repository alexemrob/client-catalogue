import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useRouteMatch, useHistory } from "react-router-dom";
import { ClientForm } from "../components/ClientForm";
import { toast } from "react-toastify";

export const Edit = () => {
  const match = useRouteMatch()
  const [client, setClient] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchClient = async () => {
      const client = await API.findClient(match.params.id)
      setClient(client.data)
    }
    fetchClient()
  }, []);

  const onSubmit = async (data) => {
    await API.updateEdit(data, match.params.id)
    toast(`${data.name}'s information was successfully updated!`, { type: "success" });
    history.push("/")
  }


  return client ? ( 
    <div className="container">
      <div className="mt-3">
        <h3>Edit Client:</h3>
        <ClientForm client={client} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Edit