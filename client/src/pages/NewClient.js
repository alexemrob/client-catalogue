import React from "react";
// import Form from "../components/Notes/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'



function NewClient() {
  return (
    <div>
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
          <label for="exampleFormControlTextarea1">Formula / Additional Notes:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <div class="card-body card-links d-flex justify-content-center">
        <a href="www.google.com" class="add-btns card-link"><b>DELETE</b></a>
        <a href="www.google.com" class="add-btns card-link"><b>SUBMIT</b></a>
      </div>
    </div>
  )
}
export default NewClient;