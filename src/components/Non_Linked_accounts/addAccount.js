import React from 'react'
import "./addAccount.css";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Header from '../header/header';
import HeaderLogout from '../header1/headerLogout';
export default function AddAccount() {

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
      function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
      }

  return (
    <div>
    <HeaderLogout/>
    <div className='container'>
        <form style={{marginTop:"96px",marginBottom:"100px",width:"50%",marginLeft:"auto",marginRight:"auto"}}  onSubmit={handleSubmit(onSubmit)}>
                <h2 className='add_account_title'>Add Bank Account</h2>
                <br></br>
                <div class="form-outline mb-4">
                  <label class="form-label"  style={{fontSize:"18px",marginLeft:"5px"}}>User name</label>
                  <input type="text" name="username" {...register('username')} placeholder="Enter the Username" class={`form-control ${errors.username ? 'is-invalid' : ''}` } />

                   <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label"  style={{fontSize:"18px",marginLeft:"5px"}}>Password</label>
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
