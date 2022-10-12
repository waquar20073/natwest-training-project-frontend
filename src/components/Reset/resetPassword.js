import React from 'react'
import HeaderLogout from '../header1/headerLogout';
import "./reset.css";
import { Link } from "react-router-dom"; 
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


function ResetPassword(){

  //Validations
  const formSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 char long'),
    newPassword: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('newPassword')], 'Passwords does not match'),
  })
  
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }


  const Reset = props =>{
    const [form, setForm] = useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      
  });
  
  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };
  
  const onSubmitForm = e => {
    e.preventDefault();
    alert.success("You've signed up successfully. Proceed to login");
  };

}

   





//Form 
    return(
        <div className='reset_page' style={{backgroundColor:"whitesmoke"}}>
           <HeaderLogout/>
           <div class="container">
              <form style={{marginTop:"40px"}}  onSubmit={handleSubmit(onSubmit)}>
                <h2 className='reset_title'>Reset Password</h2>
                <div class="form-outline mb-4">
                  <label class="form-label"  style={{fontSize:"18px",marginLeft:"5px"}}>Old Password</label>
                  <input type="password" name="oldPassword" {...register('oldPassword')} placeholder="Enter the old password" class={`form-control ${errors.oldPassword ? 'is-invalid' : ''}` } />

                   <div className="invalid-feedback">{errors.oldPassword?.message}</div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label"  style={{fontSize:"18px",marginLeft:"5px"}}>New Password</label>
                  <input type="password" name="newPassword" {...register('newPassword')} placeholder="Enter the new password" class={`form-control ${errors.newPassword ? 'is-invalid' : ''}`} />
                     <div className="invalid-feedback">{errors.newPassword?.message}</div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" style={{fontSize:"18px",marginLeft:"5px"}}>Confirm Password</label>
                  <input type="password" name="confirmPassword" {...register('confirmPwd')} placeholder="Confirm the new password" class={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                </div>

                
                <div class="d-flex justify-content-center">
                
                  <button type="submit"
                    class="btn btn-success btn-lg gradient-custom-4"  style={{marginBottom:"5px"}}>Reset
                  </button>
                  
                </div>
                
                
                <p class="text-center mt-2 mb-0" style={{fontSize:"18px"}}>Have already an account? <Link to="/login"><a href="" class="fw-bold text-body" style={{textDecoration:"none"}}>Login here</a></Link></p>
                <br></br>
                <br></br>
              </form>
              

            </div>
          </div>
    )

}


export default ResetPassword;