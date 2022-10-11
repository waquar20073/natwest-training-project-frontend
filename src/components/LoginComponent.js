import React from "react";
import { Link } from "react-router-dom";
import './LoginComponent.css'
import PropTypes from 'prop-types';
import Header from "./header/header";

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
  



  return(
    <div className='Login-component'>
    <Header/>
    
    <div id="loginform">
      
        <form>
          <h2 id="headerTitle">Login</h2>
          <div className="login_row1">
            <label>Username</label>
            <input type="text" name="userName" placeholder="Enter your username" onChange={handleFormChange} />
          </div> 
          <div className="login_row1">  
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleFormChange} />
          </div> 
          <Link to="/account" style={{textDecoration:"none"}}>
          <div id="button" className="login_row1">
              <button type="button" value="Login" onClick={handleFormSubmit}>Log in</button>
             
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

