import React from 'react'
import "./addAccount.css";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Header from '../header/header';
import HeaderLogout from '../header1/headerLogout';
import { useLocation } from 'react-router-dom';

var serverError = false;
var isSubmit = false;
var submitErrors = {};

export default function AddAccount() {

  const [formErrors, setFormErrors] = React.useState({});
  const currentBankDetails = useLocation();
  localStorage.setItem("currentBankDetails" , JSON.stringify(currentBankDetails.state));

    const formSchema = Yup.object().shape({
        username: Yup.string()
          .required('Username is mandatory')
          .min(3, 'Username must be at 3 char long'),
        password: Yup.string()
          .required('Password is mandatory')
          .min(3, 'Password must be at 3 char long'),
       
      })


      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState

      
      async function onSubmit(data) {
        // console.log(currentBankDetails.state)
        console.log(currentBankDetails) 
        console.log(JSON.stringify(data, null, 4))
        // return false
        isSubmit = false;
        submitErrors = {}; 
        serverError = false; 
        const url = 'http://localhost:8085/api/v1/linkaccount'
        const requestOptions = {
          method: "POST",
          headers : { 'Content-type': 'application/json' },
          body: JSON.stringify({
            "username": data.username,
            "password": data.password,
            "authenticationURL":"http://" + currentBankDetails.state.serverAddress + "/api/v1/jwt/token",
            "bankname": currentBankDetails.state.bankname,
            "ownerUsername": localStorage.getItem("ownerName")
          })
        }
        await fetch(url, requestOptions)
        .then((response) => response.json())
          .then((data) => { 
            console.log("Inside Data")
            console.log(data.token)       
            if(data.token == ""){
              serverError = true;
              submitErrors.errorMessageServer = "Wrong credentials";
            }
          })
          .catch( (error) =>{
            console.log("Inside Error")
            console.log(error)  
            serverError = true;
            submitErrors.errorMessageServer = "Failed to connect";
          })
          setFormErrors(submitErrors);
          isSubmit = true;
          window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          });
      }

  return (
    <div>
    <HeaderLogout/>
    { isSubmit ? <FormSubmitMessage formErrors = {formErrors}/>: null }
    <div className='container'>
        <form style={{marginTop:"96px",marginBottom:"100px",width:"50%",marginLeft:"auto",marginRight:"auto"}}  onSubmit={handleSubmit(onSubmit)}>
                <h2 className='add_account_title'>Add Bank Account</h2>
                <br></br>
                <div class="form-outline mb-4">
                  <label class="form-label"  style={{fontSize:"18px",marginLeft:"5px"}}>User name of the Bank Account</label>
                  <input type="text" name="username" {...register('username')} placeholder="Enter the Username" class={`form-control ${errors.username ? 'is-invalid' : ''}` } />

                   <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label"  style={{fontSize:"18px",marginLeft:"5px"}}>Password of the Bank Account</label>
                  <input type="password" name="password" {...register('password')} placeholder="Enter the password" class={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                     <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div class="d-flex justify-content-center">
                <br></br>
                <button type="submit"
                    class="btn btn-success btn-lg gradient-custom-4"  style={{marginBottom:"5px"}}>Add
                </button>
                  
                </div>
        </form>
    </div>
    </div>
  )
}

const FormSubmitMessage = (props) =>{
  return(
    <div className="errors">
      <br/><br/>
      {(!serverError) ? (
        <div className="alert alert-success" role="alert">
        Account Added Successfully
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          <h4>Error! while adding account</h4>
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

