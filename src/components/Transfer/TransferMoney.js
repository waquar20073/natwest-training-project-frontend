import React, { Component } from 'react';
import "./TransferMoney.css";
import { Link } from "react-router-dom";
import { Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import HeaderLogout from '../header1/headerLogout';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Sidebar from '../Sidebar/sidebar';

var serverError = false;
var isSubmit = false;
var submitErrors = {};

function TransferMoney() {

    const [formErrors, setFormErrors] = React.useState({});


    const formSchema = Yup.object().shape({
        accNo: Yup.string()
          .required('Account Number is mandatory')
          .min(1,'Account Number must be at 10 char long'),
        IFSC: Yup.string()
          .required('IFSC Code is mandatory')
          .min(1,'IFSC Code must be at 8 char long'),
        accName: Yup.string()
          .required('Account Holder Name is mandatory')
          .min(1,'Account Holder Name  must be at 8 char long'),
        amount : Yup.string()
          .required('Amount is mandatory')
          .min(2, 'Amount must be at 2 digit amount')
          .max(6, 'Amount must be at most 6 digit amount'),

    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState


   async function onSubmit(data) {
        // console.log(JSON.stringify(data, null, 4))
        // return false

        //Add Logic for port number as per the bank
        localStorage.setItem('currentBankAccount', 'sbi');
        localStorage.setItem('currentAccountNo', '1');
        localStorage.setItem('sbiToken',
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjY1NzM0NDE3LCJpYXQiOjE2NjU3MzA4MTd9.oxiSk0O4UGUZsbUGmKsyBcf7mIJThRuw70JBiS3dmpFSaouCY8H45Q9Npwr_WF1tHtQQm5e8BzJDUYB2Mn9z3A");
        let portNumber = 5051
        console.log(data);
        console.log(JSON.stringify(data, null, 4))
        let accountNoCreditParam = data.accNo;
        let accountNoDebitParam = localStorage.getItem("currentAccountNo");
        let amountParam = data.amount;
        let url = 'http://localhost:'+portNumber+'/api/v1/transfer/debit';
        let requestOptions = {
            method: "POST",
            headers : { 'Content-type': 'application/json' , 'Authorization' : localStorage.getItem("sbiToken")},
            body: JSON.stringify({
                "accountNo": accountNoDebitParam,
                "amount": amountParam                
              })
        }
        isSubmit = false;
        submitErrors = {}; 
        serverError = false;    
        await fetch(url, requestOptions)
        .then((response) => response.text())
        .then((data) => {   
            console.log(data)     
            if(!data.match("Debit Success")){
                serverError = true;
                submitErrors.errorMessageDebit = data;
            }
        })
        .catch( (error) =>{ 
            serverError = true;
            submitErrors.errorMessageServer = "Failed to connect";
        })
        if(!serverError){
            url = 'http://localhost:5051/api/v1/transfer/credit'
            requestOptions = {
                method: "POST",
                headers : { 'Content-type': 'application/json' , 'Authorization' : localStorage.getItem("sbiToken")},
                body: JSON.stringify({
                    "accountNo": accountNoCreditParam,
                    "amount": amountParam                
                })
            }
            await fetch(url, requestOptions)
            .then((response) => response.text())
            .then((data) => {        
                if(!data.match("Credit Success")){
                    serverError = true;
                    submitErrors.errorMessageCredit = data;
                }
            })
            .catch( (error) =>{ 
                serverError = true;
                submitErrors.errorMessageServer = "Failed to connect";
            }) 
        }            
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
            <div class="col main pt-1 mt-1">
                <Row id="transfer_row">
                    <Col lg={3}>
                        <Sidebar/>
                    </Col >

               

                    <Col lg={8}>
                    <div id= "transfer_form" className='text-center'>
                    <h2 id="money_transfer_title">Money Transfer</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" >
                            <Form.Select>
                                <option>Choose Destination Bank</option>
                                <option value="1">Royal Bank of Scotland</option>
                                <option value="2">State Bank of India</option>
                                <option value="3">Canara Bank</option>
                                <option value="4">ICICI Bank</option>
                                <option value="5">HDFC Bank</option>
                                <option value="6">Standard Chartered Bank</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control class={`form-control ${errors.accNo? 'is-invalid' : ''}`} {...register('accNo')}type="text" placeholder="Bank Account Number" />
                            <div className="invalid-feedback">{errors.accNo?.message}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control class={`form-control ${errors.IFSC? 'is-invalid' : ''}`} {...register('IFSC')} type="text" placeholder="IFSC Code" />
                            <div className="invalid-feedback">{errors.IFSC?.message}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control class={`form-control ${errors.accName? 'is-invalid' : ''}`} {...register('accName')} type="text" placeholder="Account Holder Name" />
                            <div className="invalid-feedback">{errors.accName?.message}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control class={`form-control ${errors.amount? 'is-invalid' : ''}`} {...register('amount')} type="text" placeholder="Amount" />
                            <div className="invalid-feedback">{errors.amount?.message}</div>
                        </Form.Group>
                        <h6 id="transactions_charges">Transaction Charges : 15/-</h6>
                        
                        <button type='submit' id="transfer_button">Transfer</button>
                        
                        
                        <br></br>
                    </Form>
                    </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </div>
            </div>
        );
    }



    const FormSubmitMessage = (props) =>{
        return(
          <div className="errors">
            <br/><br/>
            {(!serverError) ? (
              <div className="alert alert-success" role="alert">
              Amount Transferred Successfully
              </div>
            ) : (
              <div className="alert alert-danger" role="alert">
                <h4>Error! while transferring amount</h4>
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

export default TransferMoney;