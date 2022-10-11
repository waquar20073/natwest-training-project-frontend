import React from "react";
import './RegisterComponent.css'
import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";




  
function  RegisterComponent(){ 

  const [registerForm, setRegisterForm] = React.useState({
    "firstName":"",
    "lastName": "",
    "username": "",
    "email": "",
    "password": "",
    "dob" : ""
  })

  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "FirstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "LastName is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!email_regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    const date_regex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!date_regex.test(values.dob)) {
      errors.dob = "This is not a valid email format!";
    }
    return errors;
  };


  const url = 'http://localhost:8085/api/v1/registration'
  const requestOptions = {
    method: "POST",
    headers : { 'Content-type': 'application/json' },
    body: JSON.stringify({
      "firstName":registerForm.firstName,
      "lastName": registerForm.lastName,
      "username": registerForm.username,
      "email": registerForm.email,
      "password": registerForm.password,
      "dob" : registerForm.dob
    })
  }

  
  function handleFormChange(e) {
    setRegisterForm({
        ...registerForm,
        [e.target.name] : e.target.value
    });
  }

  function handleFormSubmit(e) { 
    console.log(registerForm) 
    setFormErrors(validate(registerForm));
    setIsSubmit(true); 
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });

    
  }
  
  return(
    
    <div className="register_component">
    <Header/>
    
  
 
 

    <div className="container" id="register">
    { isSubmit ? <FormSubmitMessage formErrors = {formErrors}/>: null }
    <div id="registerform" >
      <h2 id="headerTitle">Register</h2>
        <form>
          <div className="row">
          <div className="col-lg-6" id="name_col">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>First name</label>
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Enter your firstName" onChange={handleFormChange}/>
                    </div>
          </div>

          <div className="col-lg-6" id="name_col">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Last name</label>
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Enter your lastName" onChange={handleFormChange}/>
                    </div>
              
            </div>  
          </div> 
          <br></br>
          <div className="row">
              <div className="col-lg-6" id="name_col">
              <div class="form-outline">
                      <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Username</label>
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Enter your Username" onChange={handleFormChange}/>
                </div>
              </div>

              <div className="col-lg-6" id="gender_col">
                                      
              <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 class="mb-0 me-3 form-label" style={{marginLeft:"5px",fontSize:"17px"}}>Gender: </h6> 
                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline mb-0">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label class="form-check-label" for="otherGender">Other</label>
                        </div>
                  </div>
              </div>  
          </div> 
          
          <br></br>
          <div className="row">
              <div className="col-lg-6" id="name_col">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Email</label>
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Enter your email" onChange={handleFormChange}/>
                        </div>
              </div>

              <div className="col-lg-6" id="name_col">
                       <div class="form-outline">
                          <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Password</label>
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder="Enter your password" onChange={handleFormChange}/>
                        </div>
                     
              </div>  
          </div> 
          <br></br>
         
          <div class="form-check d-flex justify-content-center mb-3 mt-1">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in Terms of service
                  </label>
           </div>

          <div id="button" className="reg_row1 text-center">
            <button type="button" value="Login" onClick={handleFormSubmit}>Create Account</button>
          </div>
        
        </form> 
        

       
        
      
    </div> 
    </div>
    </div>
  )

 
}


const ListOfErrors = (props) => {
  {
    var arr = [];
    var json = props.errors
    var keys = Object.keys(json)
    Object.keys(json).forEach(function(key) {
    arr.push(json[key]);
  });
  }
  return (
    
      <ul>
          {
              arr.map(error => {
                  return <li key = {error}>{error}</li>
              })
          }
      </ul>
  )
}

const FormSubmitMessage = (props) =>{
  return(
    <div className="errors">
      <br/><br/>
      {Object.keys(props.formErrors).length === 0 ? (
        <div className="alert alert-success" role="alert">
        Account Created successfully. Please go to Log in page to access the application.
        <Link to="/login">
          <h4>Log in</h4>
        </Link>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          <h4>Error! while creating account</h4>
          <ListOfErrors errors= {props.formErrors} /> 
        </div>
      )}
     
    </div>
        
    
  )
}



export default RegisterComponent;