import React from "react";
import { Link } from "react-router-dom";
import './LoginComponent.css'
import PropTypes from 'prop-types';
import Header from "./header/header";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

function  LoginComponent({setToken}){ 
  

  const [loginForm, setLoginForm] = React.useState({
    userName: '', password: ''
  })

  const url = 'http://localhost:8085/api/v1/login'
  const requestOptions = {
    method: "POST",
    headers : { 'Content-type': 'application/json' },
    body: JSON.stringify({
      "username": loginForm.userName,
      "password": loginForm.password,
    })
  }

  
  function handleFormChange(e) {
    setLoginForm({
        ...loginForm,
        [e.target.name] : e.target.value
    });
    console.log(loginForm)
  }

  function handleFormSubmit(e) { 
    console.log(loginForm) 
    setToken({"token" : "test123"});  
    fetch(url, requestOptions)
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
    })
    
  }
  


  const formSchema = Yup.object().shape({
    
    userName: Yup.string()
      .required('User Name is mandatory')
      .min(8,'Username must be at 8 char long'),
    password: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 char long'),
    
                       
  })
  
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }




  return(
    <div className='Login-component'>
    <Header/>
    
    <div id="loginform">
      
        <form>
          <h2 id="headerTitle">Login</h2>
          <div className="login_row1">
            <label>Username</label>
            <input type="text" name="userName" class={`form-control ${errors.userName? 'is-invalid' : ''}`} {...register('userName')} placeholder="Enter your username" />
            <div className="invalid-feedback">{errors.userName?.message}</div>
          </div> 
          <div className="login_row1">  
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" class={`form-control ${errors.password? 'is-invalid' : ''}`} {...register('password')} />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div> 
          <Link to ="/account" style={{textDecoration:"none"}}>
          <div id="button" className="login_row1">
            
              <button type="submit"  value="Login" onClick={handleFormSubmit}>Log in</button>
            
          </div>
          </Link>
           
         
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
export default LoginComponent;


