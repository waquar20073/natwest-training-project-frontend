import React, { Component } from 'react';
import "./TransferMoney.css";
import { Link } from "react-router-dom";
import { Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import HeaderLogout from '../header1/headerLogout';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

var serverError = false;
var isSubmit = false;
var submitErrors = {};

function TransferMoney() {

    const [formErrors, setFormErrors] = React.useState({});


    const formSchema = Yup.object().shape({
        bankName : Yup.string().required(),
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
    const { register, handleSubmit, setValue, reset, formState } = useForm(formOptions)
    const { errors } = formState


   async function onSubmit(data) {
        // console.log(JSON.stringify(data, null, 4))
        // return false

        
        let linkedAccounts = JSON.parse(localStorage.getItem("LinkedBanks"));
        var creditToken = "";
        var creditServerAddress = "";
        for (var i=0 ; i < linkedAccounts.length ; i++){
            if (linkedAccounts[i]["bankname"] == data.bankName) {
                creditToken = JSON.parse(linkedAccounts[0]["accessToken"])['token'];
                creditServerAddress = linkedAccounts[i]["serverAddress"];
            }
        }
        //console.log(creditServerAddress)
        //console.log(data);
        //console.log(JSON.stringify(data, null, 4))
        let accountNoCreditParam = data.accNo;
        //let accountNoDebitParam = localStorage.getItem("customerAccountId");
        let accountNoDebitParam = 1;
        let amountParam = data.amount;
        let url = `http://${localStorage.getItem("serverAddress")}/api/v1/transfer/debit`;
        const accessToken = localStorage.getItem("accessToken");
        let requestOptions = {
            method: "POST",
            headers : { 'Content-type': 'application/json' , 'Authorization' : `Bearer ${accessToken}`},
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
            //console.log(data)     
            if(!data.match("Debit Success")){
                serverError = true;
                submitErrors.errorMessageDebit = "Transfer Fail";
            }
        })
        .catch( (error) =>{ 
            serverError = true;
            submitErrors.errorMessageServer = "Failed to connect";
        })
        if(!serverError){
            url = `http://${creditServerAddress}/api/v1/transfer/credit`;
            requestOptions = {
                method: "POST",
                headers : { 'Content-type': 'application/json' , 'Authorization' : `Bearer ${creditToken}`},
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
                    submitErrors.errorMessageCredit = "Transfer Failed";
                }
            })
            .catch( (error) =>{ 
                serverError = true;
                submitErrors.errorMessageServer = "Failed to connect";
            }) 
        }
        const requestOptions2 = {
            method: "POST",
            headers : { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "author": localStorage.getItem("accountId"),
                "sourceAccountId" : accountNoDebitParam,
                "sourceBankName" : localStorage.getItem("bankname"),
                "destinationAccontId": accountNoDebitParam,
                "destinationBankName":  data.bankName,
                "amount":  amountParam              
            })
        }
        fetch("http://localhost:8086/api/v1/record", requestOptions2)
            .then((response) => response.text())
            .then((data) => {         
            })
            .catch( (error) =>{  
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
            <div class="col main pt-1 mt-1">
                <Row id="transfer_row">
                    <Col lg={3}>
                        <div id="sidebar1">
                            <div class="sidebar-offcanvas"  role="navigation" style={{backgroundColor:"#e9ecef"}}>
                            <ul class="nav flex-column sticky-top pl-0 pt-4 p-3 mt-3 ">
                                <li class="nav-item mb-2 mt-3"><a class="nav-link text-dark" href="#"><h5>Features</h5></a></li>
                                <Link to="/profile" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="profile.png" alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"5px"}}></img>My Profile</span></a></li>
                                </Link>
                                <Link to="/account" style={{textDecoration:"none"}}>
                                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Choose Bank</span></a></li>
                                </Link>
                                <Link to="/reports" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Reports</span></a></li>
                                </Link>
                               
                                <Link to="/transfer" style={{textDecoration:"none"}}>
                                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Transfer Money</span></a></li>
                                </Link>
                                <Link to="/transactions" style={{textDecoration:"none"}}>
                                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Transaction History</span></a></li>
                                </Link>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                {/* <Link to="/login" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="logout.png"alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Logout</span></a></li>   
                                </Link> */}
                            </ul>
                            </div>
                        </div>
                    </Col >

               

                    <Col lg={8}>
                    <div id= "transfer_form" className='text-center'>
                    <h2 id="money_transfer_title">Money Transfer</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" >
                            <Form.Select
                                {...register("bankName")}
                                onChange={(e) => setValue('bankName', e.target.value, { shouldValidate: true })}                             >
                                <option value = "">Choose Destination Bank</option>
                                <option value="Royal Bank of Scotland">Royal Bank of Scotland</option>
                                <option value="State Bank of India">State Bank of India</option>
                                <option value="Canara Bank">Canara Bank</option>
                                <option value="ICICI Bank">ICICI Bank</option>
                                <option value="HDFC Bank">HDFC Bank</option>
                                <option value="Standard Chartered Bank">Standard Chartered Bank</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="invalid-feedback">{errors.bankName?.message}</div>
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