import React from 'react'
import HeaderLogout from '../header1/headerLogout';
import "./reset.css";
import { Link } from "react-router-dom"; 
export default function 
() {
  return (
    <div className='reset_page' style={{backgroundColor:"whitesmoke"}}>
           <HeaderLogout/>
           <div class="container">
              <form style={{marginTop:"40px"}}>
                <h2 className='reset_title'>Reset Password</h2>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1cg" style={{fontSize:"18px",marginLeft:"5px"}}>Old Password</label>
                  <input type="text" id="form3Example1cg" placeholder="Enter the old password" class="form-control form-control-lg" /> 
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3cg" style={{fontSize:"18px",marginLeft:"5px"}}>New Password</label>
                  <input type="email" id="form3Example3cg" placeholder="Enter the new password" class="form-control form-control-lg" />  
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example4cg" style={{fontSize:"18px",marginLeft:"5px"}}>Confirm Password</label>
                  <input type="password" id="form3Example4cg" placeholder="Confirm the new password" class="form-control form-control-lg" />  
                </div>

                <div class="d-flex justify-content-center">
                  
                  <button type="button"
                    class="btn btn-success btn-lg gradient-custom-4" style={{marginBottom:"5px"}}>Reset</button>
                  
                </div>
                
                <p class="text-center mt-2 mb-0" style={{fontSize:"18px"}}>Have already an account? <Link to="/login"><a href="" class="fw-bold text-body" style={{textDecoration:"none"}}>Login here</a></Link></p>
                
                <br></br>
              </form>
              

            </div>
          </div>
        
  )
}
