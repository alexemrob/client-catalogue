import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function NewClient() {
    return (
<div>
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Last" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="(***)***-***" />
  </div> 
  <div class="form-group">
    <label for="exampleFormControlInput1">Email Address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Formula</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Reffered By</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="instagram" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Credit Card #</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="1234 5678 9876 5432" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Expiration Date</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="04/24" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">CVC Code</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="424" />
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Additional Notes</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>

<div class="card-body card-links d-flex justify-content-around">
                    <a href="www.google.com" class="card-link"><b>DELETE</b></a>
                    <a href="www.google.com" class="card-link"><b>SUBMIT</b></a>
                </div>
</div>
    )
}
export default NewClient;