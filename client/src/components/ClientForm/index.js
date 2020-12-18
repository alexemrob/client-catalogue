import React from "react";
import { useForm } from 'react-hook-form';
import "./style.css"

export const ClientForm = ({ client, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { ...client },
  });
  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <div className="add-client d-flex justify-content-center">
      <form className="form-control3 form3 d-flex flex-column" onSubmit={submitHandler}>
        <div className="form-group">
          <label className="label" htmlFor="text" >Name:</label>
          <input class="form-control2" ref={register} type="text" name="name" id="exampleFormControlInput1" placeholder="First Last" />
        </div>
        <div className="form-group">
          <lable className="label" htmlFor="text">Phone Number:</lable>
          <input class="form-control2" ref={register} type="text" name="phone" id="exampleFormControlInput1" placeholder="***-***-***" />
        </div>
        <div className="form-group">
          <lable className="label" htmlFor="text">Email Address:</lable>
          <input class="form-control2" ref={register} type="text" name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <lable className="label" htmlFor="text">Reffered By:</lable>
          <input class="form-control2" ref={register} type="text" name="referBy" id="exampleFormControlInput1" placeholder="instagram" />
        </div>
        <div className="form-group">
          <lable className="label" htmlFor="text">Instagram Handle: @</lable>
          <input class="form-control2" ref={register} type="text" name="insta" id="exampleFormControlInput1" placeholder="Ali_AtTheSalon" />
        </div>
        <div className="form-group">
          <lable className="label" htmlFor="text">Formulas + Notes:</lable>
          <textarea class="form-control2" ref={register} type="text" name="notes" id="exampleFormControlInput1" rows="3"></textarea>
        </div>
        <div className="bottom form-group d-flex justify-content-center">
          <button type="submit" className="add-btn">SUBMIT</button>
        </div>
      </form>
    </div>
  )
}