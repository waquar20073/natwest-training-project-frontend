import React, { Component, useEffect } from 'react';
import "./TransferMoney.css";
import { Link } from "react-router-dom";
import { Row , Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import HeaderLogout from '../header1/headerLogout';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import Sidebar from '../Sidebar/sidebar';

var serverError = false;
var isSubmit = false;
var submitErrors = {};
var linkedBankError = false;
var insufficientBalance =false;

function TransferMoney() {

    useEffect(() => {
        isSubmit = false;
    });

    useEffect(() => {
        isSubmit = false;
    });

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
        let creditBankName = data.bankName
        insufficientBalance =false;
        isSubmit = false;

        submitErrors = {};
        serverError = false;

        linkedBankError = false;
        let linkedAccounts = JSON.parse(localStorage.getItem("LinkedBanks"));
        let accountNoDebitParam = localStorage.getItem("customerAccountId");
        var creditToken = "";
        var creditServerAddress = "";
        const accessToken = localStorage.getItem("accessToken");
        let amountParam = data.amount;
        const host=`http://${localStorage.getItem("serverAddress")}/api/v1`;
        const json = `{"accountId":${accountNoDebitParam} }`;
        const obj = JSON.parse(json);
        await axios.post(`${host}/accounts/balance`, obj, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'

            }
          }).then((reponse)=> {
             if(reponse.data < amountParam ){
                serverError =true;
                insufficientBalance = true;
                submitErrors.errorMessageDebit = "Insufficient Balance";
             }
          }).catch((err)=>{
            console.error(err);
          });
        if(!insufficientBalance){
        for (var i=0 ; i < linkedAccounts.length ; i++){
            if (linkedAccounts[i]["bankname"] == data.bankName) {
                if(linkedAccounts[i]["accessToken"]!=""){
                    creditToken = JSON.parse(linkedAccounts[i]["accessToken"])['token'];
                    creditServerAddress = linkedAccounts[i]["serverAddress"];
                 }
            }

        }
        // if(creditToken == ""){
        //     linkedBankError = true;
        //     serverError = true;
        //     isSubmit = true;
        //     submitErrors.errorMessageServer2 = "Transfer to only linked banks is allowed";
        // }
        //console.log(creditServerAddress)
        //console.log(data);
        //console.log(JSON.stringify(data, null, 4))


            let accountNoCreditParam = data.accNo;

            //let accountNoDebitParam = 1;

            const urlD = `http://${localStorage.getItem("serverAddress")}/api/v1/transfer/debit`;


            const requestOptionsD = {
                method: "POST",
                headers : { 'Content-type': 'application/json' , 'Authorization' : `Bearer ${accessToken}`},
                body: JSON.stringify({
                    "accountNo": accountNoDebitParam,

                    "amount": amountParam
                })
            }

            await fetch(urlD, requestOptionsD)
            .then((response) => response.text())
            .then((data) => {

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
                const urlC = `http://${creditServerAddress}/api/v1/transfer/credit`;
                const requestOptionsC = {
                    method: "POST",
                    headers : { 'Content-type': 'application/json' , 'Authorization' : `Bearer ${creditToken}`},
                    body: JSON.stringify({
                        "accountNo": accountNoCreditParam,

                        "amount": amountParam

                    })
                }
                await fetch(urlC, requestOptionsC)
                .then((response) => response.text())

                .then((data) => {

                    if(!data.match("Credit Success")){
                        serverError = true;
                        submitErrors.errorMessageCredit = "Transfer Failed, You Entered Wrong Account Number";
                        fetch(`http://${localStorage.getItem("serverAddress")}/api/v1/transfer/credit`, requestOptionsD)
                    }


                })
                .catch( (error) =>{
                    serverError = true;
                    submitErrors.errorMessageServer = "Failed to connect";
                })

            }
            if(!serverError){
                const urlTransactionsDebit = `http://${localStorage.getItem("serverAddress")}/api/v1/transactions/newtransaction`;
                const requestOptionsDebit = {
                    method: "POST",
                    headers : { 'Content-type': 'application/json' , 'Authorization' : `Bearer ${accessToken}`},
                    body: JSON.stringify({
                        "transactionWith": localStorage.getItem("bankname"),
                        "accountId": accountNoDebitParam,
                        "type":"debit",

                        "amount": amountParam

                    })
                }
                fetch(urlTransactionsDebit, requestOptionsDebit)
                const urlTransactionsCredit = `http://${creditServerAddress}/api/v1/transactions/newtransaction`;
                const requestOptionsCredit = {
                    method: "POST",
                    headers : { 'Content-type': 'application/json' , 'Authorization' : `Bearer ${creditToken}`},
                    body: JSON.stringify({
                        "transactionWith": creditBankName,
                        "accountId": accountNoCreditParam,
                        "type":"credit",

                        "amount": amountParam

                    })
                }

                fetch(urlTransactionsCredit, requestOptionsCredit)

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


                fetch("http://localhost:8085/api/v1/record", requestOptions2)
                    .then((response) => response.text())
                    .then((data) => {
                    })
                    .catch( (error) =>{
                    })
            }


        }
        isSubmit = true;
        setFormErrors(submitErrors);

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
                        <Sidebar />
                    </Col >



                    <Col lg={8}>
                    <div id= "transfer_form" className='text-center'>
                    <h2 id="money_transfer_title">Money Transfer</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" >
                            <Form.Select
                                {...register("bankName")}

                                onChange={(e) => setValue('bankName', e.target.value, { shouldValidate: true })}
                                                           >
                                <option value = "">Choose Destination Bank</option>
                                {JSON.parse(localStorage.getItem("linkedAccounts")).map((e, key) => {
                                    return <option key={key} value={e.bankname}>{e.bankname}</option>;
                                    })}
                                {/* <option value="Royal Bank of Scotland">Royal Bank of Scotland</option>
                                <option value="State Bank of India">State Bank of India</option>
                                <option value="Canara Bank">Canara Bank</option>
                                <option value="ICICI Bank">ICICI Bank</option>
                                <option value="HDFC Bank">HDFC Bank</option>
                                <option value="Standard Chartered Bank">Standard Chartered Bank</option> */}
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
                        <h6 id="transactions_charges">Note: Transfer to only linked banks is allowed</h6>
                        <h6 id="transactions_charges">Transaction Charges : 0/</h6>


                        <button type='submit' id="transfer_button">Transfer</button>


                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br />
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
