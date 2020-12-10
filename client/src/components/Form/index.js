import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Form(props){
  return (
  <div className="container">
  <form>
    <div className="form-grop">
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control search-bar"
        placeholder="Search for a Client"
        id="search"
      />
      <a onClick={props.handleFormSubmit} className="btn-neon">
        Search
        </a>
    </div>
  </form>
  </div>
);
}
export default Form;