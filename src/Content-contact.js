import React from 'react';
import logo from "./image/logo-ALTA-v2.png";
//import { LocalData } from './js/contact_us';
import App_reviewMessage from './App_reviewMessage.js';

function LocalData(){
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  let name = document.getElementById("fullname").value;
  let email = document.getElementById("emailAddress").value;
  let phone = document.getElementById("phoneNumber").value;
  let nationality = document.getElementById("nationality").value;
  let message = document.getElementById("message").value;

  localStorage.setItem("nameValue", name);
  localStorage.setItem("emailValue", email);
  localStorage.setItem("phoneNumValue", phone);
  localStorage.setItem("nationalityValue", nationality);
  localStorage.setItem("messageValue", message);
  App_reviewMessage();
}

export default function Content_contact() {
    return (
        <div>
        <div className="row main">
        <div className="col-sm-5 col p-0 picture-contact d-flex justify-content-center align-content-center">
          <div className="row container-dark-blue d-flex justify-content-center align-content-center"> 
            <div className="col"></div>
            <img src={logo} alt="" className="img-fluid col"/>
            <div className="col"></div>
          </div>
        </div>
        <div className="col-sm-6 py-3 row justify-content-center align-content-center">
          <div className="col-10">
            <p className="display-6 mb-2">Contact us</p>
            <form className="row g-3 needs-validation" noValidate onSubmit={App_reviewMessage}>
              <div className="col-md-12">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname"  placeholder="Your Full Name Here..." required />
                <div className="invalid-feedback">
                  Full name cannot be empty
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="emailAddress" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="emailAddress"  placeholder="Example@domain.com" required/>
                <div className="invalid-feedback">
                  Email address cannot be empty
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber" placeholder="08573890xxxx" required />
                <div className="invalid-feedback">
                  Phone number cannot be empty
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="nationality" className="form-label">Nationality</label>
                <select className="form-select" id="nationality" required>
                  <option defaultValue value="">Choose...</option>
                  <option value="1">Indonesia</option>
                  <option value="2">Brazilian</option>
                  <option value="3">British</option>
                </select>
                <div className="invalid-feedback">
                  Please select your nationality.
                </div>
              </div>
              <div className="col-md-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-control form-control-sm " rows="5" placeholder="Your Message Here..." required></textarea><br/>
              </div>
              <button type="submit" className="btn btn-dark rounded-pill col-md-3" onClick={LocalData}>Submit</button>
              </form>
  
          </div>
          
        </div>
      </div>
        </div>
    )
}
