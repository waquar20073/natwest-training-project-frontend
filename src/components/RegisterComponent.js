import React from "react";
import './RegisterComponent.css'
import { Link } from "react-router-dom";
import Header from "./header/header";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import moment from "moment/moment";

  
function RegisterComponent(){ 

  /*const [registerForm, setRegisterForm] = React.useState({
    "firstName":"",
    "lastName": "",
    "username": "",
    "email": "",
    "password": "",
    "dob" : ""
  })

  const [isSubmit, setIsSubmit] = React.useState(false);
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
    //setFormErrors(validate(registerForm));
    setIsSubmit(true); 
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });

  }*/
  

  //Validations
  const formSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is mandatory')
      .min(8,'Firstname must be at 8 char long'),
    lastName: Yup.string()
      .required('Last Name is mandatory')
      .min(8,'Lastname must be at 8 char long'),
    userName: Yup.string()
      .required('User Name is mandatory')
      .min(8,'Username must be at 8 char long'),
    password: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 char long'),
    email : Yup.string()
      .required('Email is required')
      .email('Must be a valid email').max(255),
    date : Yup.string()
      .required("DOB is Required")
      .test("DOB", "Please choose a valid date of birth", (value) => {
      return moment().diff(moment(value), "years") >= 10;
    }),
    mobile : Yup.string()
    .required("Phone number is mandatory")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(8)
    .max(10)
                       
  })
  
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }





  return(

    
    <div className="register_component">
    <Header/>
    <div className="container" id="register">
    <div id="registerform" >
      <h2 id="headerTitle">Register</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
          <div className="col-lg-4" id="name_col">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>First name</label>
                      <input type="text" id="form3Example1m" class={`form-control ${errors.firstName? 'is-invalid' : ''}`} {...register('firstName')} placeholder="Enter your firstName" />
                      <div className="invalid-feedback">{errors.firstName?.message}</div>
                    </div>
          </div>

          <div className="col-lg-4" id="name_col">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Last name</label>
                      <input type="text" id="form3Example1m" class={`form-control ${errors.lastName? 'is-invalid' : ''}`} {...register('lastName')} placeholder="Enter your lastName"/>
                      <div className="invalid-feedback">{errors.lastName?.message}</div>
                    </div>
              
            </div>  

            <div className="col-lg-4" id="name_col">
              <div class="form-outline">
                      <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Username</label>
                      <input type="text" id="form3Example1m" class={`form-control ${errors.userName? 'is-invalid' : ''}`} {...register('userName')} placeholder="Enter your Username"/>
                      <div className="invalid-feedback">{errors.userName?.message}</div>
                </div>
              </div>
          </div> 
          
          <br></br>
          <div className="row">
              <div className="col-lg-6" id="name_col">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Email</label>
                          <input type="text" id="form3Example1m" class={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} placeholder="Enter your email" />   
                          <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
              </div>

              <div className="col-lg-6" id="name_col">
                       <div class="form-outline">
                          <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Password</label>
                          <input type="password" id="form3Example1m" class={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password')} placeholder="Enter your password" />
                          <div className="invalid-feedback">{errors.password?.message}</div>
                       </div>
                     
              </div>  
          </div> 
          <br></br>
          <div className="row">
              <div className="col-lg-6" id="name_col">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Date of Birth</label>
                          <input type="date" id="form3Example1m" class={`form-control ${errors.date ? 'is-invalid' : ''}`} {...register('date')} placeholder="Enter your email" />   
                          <div className="invalid-feedback">{errors.date?.message}</div>
                        </div>
              </div>

              <div className="col-lg-6" id="name_col">
                       <div class="form-outline">
                          <label class="form-label" for="form3Example1m" style={{fontSize:"18px",marginLeft:"5px"}}>Mobile Number</label>
                          <input type="text" id="form3Example1m" class={`form-control ${errors.mobile ? 'is-invalid' : ''}`} {...register('mobile')} placeholder="Enter your password" />
                          <div className="invalid-feedback">{errors.mobile?.message}</div>
                       </div>
                     
              </div>  
          </div> 
          
          <br></br>
          <br></br>
          
          <div class="form-check d-flex justify-content-center mb-3 mt-1" >
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in Terms of service
                  </label>
           </div>

          
          <div id="button" className="reg_row1 text-center">
            
            <button type="submit" value="Login" >Create Account</button>
            
          </div>
        
        </form> 
        

       
        
      
    </div> 
    </div>
    </div>
  )

 
  }


/*const ListOfErrors = (props) => {
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
}*/



export default RegisterComponent;
