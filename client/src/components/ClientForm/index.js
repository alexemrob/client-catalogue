import React from "react";
import { useForm } from 'react-hook-form';


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


// function ClientForm({clients, onSubmit}) {
//   const { register, handleSubmit } = useForm()
//   const history = useHistory()

//   const onSubmit = handleSubmit((data) => {
//     alert(JSON.stringify(data));
//     history.push("/")
//   })

export const ClientForm = ({ client, onSubmit }) => {
    const { register, handleSubmit } = useForm({
      defaultValues: { text: client ? client.text : "" },
    });
  
    const submitHandler = handleSubmit((data) => {
      onSubmit(data)
    });

  return (
    <div className="add-client d-flex justify-content-center">
        <form className="form-control" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="text" >Name:</label>
            <input class="form-control" ref={register} type="text" name="name" id="exampleFormControlInput1" placeholder="First Last" />
          </div>
          <div className="form-group">
            <lable htmlFor="text">Phone Number:</lable>
            <input class="form-control" ref={register} type="text" name="phone" id="exampleFormControlInput1" placeholder="***-***-***" />
          </div>
          <div className="form-group">
            <lable htmlFor="text">Email Address:</lable>
            <input class="form-control" ref={register} type="text" name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <lable htmlFor="text">Reffered By:</lable>
            <input class="form-control" ref={register} type="text" name="referBy" id="exampleFormControlInput1" placeholder="instagram" />
          </div>
          <div className="form-group">
            <lable htmlFor="text">Instagram Handle: @</lable>
            <input class="form-control" ref={register} type="text" name="insta" id="exampleFormControlInput1" placeholder="Ali_AtTheSalon" />
          </div>
          <div className="form-group">
            <lable htmlFor="text">Formulas / Additional Notes:</lable>
            <textarea class="form-control" ref={register} type="text" name="notes" id="exampleFormControlInput1" rows="3"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create Client</button>
          </div>
        </form>
    </div>
  )
}