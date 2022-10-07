import React from "react";
import { Link, Outlet } from "react-router-dom";
import './LoginComponent.css'
import PropTypes from 'prop-types';



  
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
    
    <div id="loginform" >
      <h2 id="headerTitle">Login</h2>
        <form>
          <div className="row1">
            <label>Username</label>
            <input type="text" name="userName" placeholder="Enter your username" onChange={handleFormChange} />
          </div> 
          <div className="row1">  
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleFormChange} />
          </div> 
          <div id="button" className="row1">
            <button type="button" value="Login" onClick={handleFormSubmit}>Log in</button>
          </div>
        </form> 
      <div className = "signupbutton">
        <hr></hr>
        <Link to="/signup">
          <button>Create New Account</button>
        </Link>
      </div>      
    </div> 
    
  )

 
}
LoginComponent.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default LoginComponent;

