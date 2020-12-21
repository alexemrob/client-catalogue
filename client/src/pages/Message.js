import React from "react";

function Message() {
  return (
    <div className="messages">
      <div className="texting d-flex justify-content-center">
        <h3><b>Send To:</b> Clientelle</h3>
        </div>
        <div className="form-group d-flex justify-content-center">
          <lable className="label" htmlFor="text">Message: </lable>
          <textarea class="form-control2" type="text" name="notes" id="exampleFormControlInput1" rows="10"></textarea>
        </div>
      
      <div className="form-group d-flex justify-content-center">
        <button type="submit" className="add-btn">SEND</button>
      </div>
    </div>
  );
}

export default Message;