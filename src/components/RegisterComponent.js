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
          <div className="row1">
            <label>FirstName</label>
            <input type="text" name="firstName" placeholder="Enter your firstName" onChange={handleFormChange} />
          </div> 
          <div className="row1">  
            <label>LastName</label>
            <input type="text" name="lastName" placeholder="Enter your lastName" onChange={handleFormChange} />
          </div> 
          <div className="row1">  
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter your username" onChange={handleFormChange} />
          </div>
          <div className="row1">  
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleFormChange} />
          </div>
          <div className="row1">  
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleFormChange} />
          </div>
          <div className="row1">  
            <label>Date of Birth</label>
            <input type="date" name="dob" placeholder="Enter your dob" onChange={handleFormChange} />
          </div>
          <div id="button" className="row1">
            <button type="button" value="Login" onClick={handleFormSubmit}>Create Account</button>
          </div>
        </form> 
        <div className = "goBackToLogin">
        <hr></hr>
        <h4>Have an account ?</h4> 
        <Link to="/login" style={{textDecoration: "none",color:"rgb(58, 12, 104)"}}>
          <button type="button">Log in</button>
        </Link>
        <br/>
        
      </div>
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