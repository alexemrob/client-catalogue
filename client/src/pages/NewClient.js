import React from "react";
import API from "../utils/API";
import '../components/Search/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


// function deleteClient(id) {
//   API.deleteClient(id)
//     .then(res => loadClients())
//     .catch(err => console.log(err));
// }

// function handleFormSubmit(event) {
//   event.preventDefault();
//   if (formObject.name && formObject.phone) {
//     API.saveClient({
//       _id: formObject.id,
//       name: formObject.name,
//       phone: formObject.phone,
//       email: formObject.email,
//       referBy: formObject.referBy,
//       notes: formObject.notes,
//       insta: formObject.insta
//     })
//       .then(res => loadClients())
//       .catch(err => console.log(err));
//   }
// };


function NewClient() {
  return (
    <div className="add-client">
      <form className="d-flex justify-content-center">
        <div class="form-group">
          <label for="exampleFormControlInput1">Name:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Last" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Phone Number:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="***-***-***" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email Address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Instagram Handle: @</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ali_AtTheSalon" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Reffered By:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="instagram" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Formulas / Additional Notes:</label>
          <textarea class="form-control" id="exampleFormControlInput1" rows="3"></textarea>
        </div>
      </form>
      <div class="card-body card-links d-flex justify-content-center">
        {/* <a onClick={() => deleteClient(client.id)} class="add-btns card-link"><b>DELETE</b></a>
        <a onClick={handleFormSubmit} class="add-btns card-link"><b>SUBMIT</b></a> */}
      </div>
    </div>
  )
}
export default NewClient;