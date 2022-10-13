import React from "react";
import { Link } from "react-router-dom";
import './LoginComponent.css'
import PropTypes from 'prop-types';
import Header from "./header/header";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

var serverError = false;
var isSubmit = false;
var loginErrors = {};
var accountId = -1;

function  LoginComponent({setToken}){ 
  
  const [formErrors, setFormErrors] = React.useState({});

  // const [loginForm, setLoginForm] = React.useState({
  //   userName: '', password: ''
  // })

  // const url = 'http://localhost:8085/api/v1/login'
  // const requestOptions = {
  //   method: "POST",
  //   headers : { 'Content-type': 'application/json' },
  //   body: JSON.stringify({
  //     "username": loginForm.userName,
  //     "password": loginForm.password,
  //   })
  // }

  
  // function handleFormChange(e) {
  //   setLoginForm({
  //       ...loginForm,
  //       [e.target.name] : e.target.value
  //   });
  //   console.log(loginForm)
  // }

  // function handleFormSubmit(e) { 
  //   console.log(loginForm) 
  //   setToken({"token" : "test123"});  
  //   fetch(url, requestOptions)
  //   .then((response) => response.text())
  //   .then((data) => {
  //     console.log(data)
  //   })
    
  // }
  


  const formSchema = Yup.object().shape({
    
    username: Yup.string()
      .required('User Name is mandatory')
      .min(4,'Username must be at 4 char long'),
    password: Yup.string()
      .required('Password is mandatory')
      .min(8, 'Password must be at 8 char long'),
    
                       
  })
  
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState


  async function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    const url = 'http://localhost:8085/api/v1/login'
    const requestOptions = {
    method: "POST",
    headers : { 'Content-type': 'application/json' },
    body: JSON.stringify(data, null, 4)
  }

    accountId = -1;
    isSubmit = false;
    loginErrors = {}; 
      serverError = false;    
      await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {        
        if(!data.status.match("authenticated")){
          serverError = true;
          loginErrors.errorMessageServer = data.status;
        }else{
          accountId = data.accountId;
        } 
      })
      .catch( (error) =>{ 
        serverError = true;
        loginErrors.errorMessageServer = "Failed to connect";
      })
      if(!serverError){   
        console.log("Login Success ")
        setToken({"token" : "Login Success"                
                  }, accountId); 
      }    
    
    isSubmit = true; 
    setFormErrors(loginErrors);
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    

  
  }




  return(
    <div className='Login-component'>
    <Header/>
    { isSubmit ? <FormSubmitMessage formErrors = {formErrors}/>: null }
    
    <div id="loginform" onSubmit={handleSubmit(onSubmit)}>
      
        <form>
          <h2 id="headerTitle">Login</h2>
          <div className="login_row1">
            <label>Username</label>
            <input type="text" name="userName" class={`form-control ${errors.username? 'is-invalid' : ''}`} {...register('username')} placeholder="Enter your username" />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div> 
          <div className="login_row1">  
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" class={`form-control ${errors.password? 'is-invalid' : ''}`} {...register('password')} />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div> 
          
          <div id="button" className="login_row1">
            
              <button type="submit"  value="Login" >Log in</button>
            
          </div>
          
           
         
          <hr></hr>
          <div class="login_det">
            <div> 
                <Link to="/reset" style={{textDecoration:"none"}}>
                  <span style={{color:"black",fontSize:"18px",fontFamily:"Sans-serif"}}>Forgot the password ?</span>
                  <span style={{color:"rgb(58, 12, 104)",fontSize:"18px", fontWeight:"bold"}}> Reset</span> 
                </Link>
            </div>
            <div> 
                  
                <Link to="/signup" style={{textDecoration:"none"}}>
                  <span style={{color:"black",fontSize:"18px",fontFamily:"Sans-serif"}}>New User ?</span>
                  <span style={{color:"rgb(58, 12, 104)",fontSize:"18px",fontWeight:"bold"}}> Signup</span>

                </Link>
                
              </div>
          </div>
            
  
          
          
        </form> 
       
          
          
           
    </div> 
    
    </div>
    
  )

 
}
LoginComponent.propTypes = {
  setToken: PropTypes.func.isRequired
};

const FormSubmitMessage = (props) =>{
  return(
    <div className="errors">
      <br/><br/>
      {(!serverError) ? (
        <div className="alert alert-success" role="alert">
        Account Created successfully. Please go to Log in page to access the application.
        <Link to="/login">
          <h3>Log in</h3>
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

export default LoginComponent;


