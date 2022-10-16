import React, { Component, useEffect, useState } from 'react';
import './Accounts.css'
import { useNavigate } from 'react-router-dom';
import HeaderLogout from '../header1/headerLogout';
import Bankcard from './bankcard';

function Accounts(){

  const [accountsList, setaAcountsList] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const url = 'http://localhost:8085/api/v1/linkaccount/listaccounts'

  const requestOptions = {
    method: "POST",
    headers : { 'Content-type': 'application/json' },
    body: JSON.stringify({
      "accountId" : localStorage.getItem('accountId')
    })
  }


  useEffect(() => {
    fetch(url, requestOptions).then(response => response.json()).then(
      (result) => {
        setaAcountsList(result)
        localStorage.setItem("LinkedBanks" , JSON.stringify(result));
        setIsLoaded(true)
      },
      (error) => {
        setIsLoaded(false)
        setError(error)
      }
    )
  }, [])



    // //Dummy data
    // const data = [
    //     {
    //       id:1,
    //       bankname: "State Bank of India",
    //       value: "true",
    //       img : "SBI-logo.svg.png"
    //     },
    //     {
    //       id:2,
    //       bankname: "Royal Bank of Scotland",
    //       value: "true",
    //       img : "rbs.jpg"
    //     },
    //     {
    //       id:3,
    //       bankname: "HDFC Bank",
    //       value: "true",
    //       img : "hdfc.jpg"
    //     },
    //     {
    //       id : 4,
    //       bankname: "ICICI Bank",
    //       value: "false",
    //       img :  "icici.png"
    //     },
    //     {
    //       id : 5,
    //       bankname: "Canara Bank",
    //       value: "false",
    //       img: "canara.jpg"
    //     },
    //     {
    //       id : 6,
    //       bankname: "Standard Chatered Bank",
    //       value: "false",
    //       img : "standard-chartered.png"
    //     }
    //   ];

      //2 Different Lists for linked and non linked accounts
      const linked_accounts = [];
      const non_linked_accounts = [];

      //Pushing data to lists
      accountsList.map(data =>{
        if(data.value == "true"){
            linked_accounts.push(data);
        }
        else{
            non_linked_accounts.push(data);
        }
      })


      //Mapping card and button from bankcard.js
        const cards = linked_accounts.map((item) => {
          //console.log(item);
            return(
            <div id="card_style" className='text-center'>
            <Bankcard key={item.id} {...item} />
            <button className="enter" onClick={()=>{
              navigate("/bankDetails", {state:item});
              localStorage.removeItem("bankname");
              localStorage.removeItem("accessToken");
              localStorage.removeItem("serverAddress");
              localStorage.removeItem("customerAccountId");
              localStorage.removeItem("linkedAccounts");
              localStorage.setItem("bankname" , item.bankname);
              localStorage.setItem("accessToken" , JSON.parse(item.accessToken).token);
              localStorage.setItem("serverAddress" , item.serverAddress);
              localStorage.setItem("customerAccountId" , item.bankAccountId);
              localStorage.setItem("linkedAccounts" , JSON.stringify(linked_accounts));
          }}>Enter</button>
            </div>)
        });

        const cards1 = non_linked_accounts.map((item) => {
            return (
            <div id="card_style" className='text-center'>
            <Bankcard key={item.id} {...item} />
            <button className="add" onClick={()=>{
              navigate("/addAccount", {state:item});

          }}>Add</button>
            </div>
            )
      });


     //Button navigation for dashboard and add account pages
     let navigate  = useNavigate();
     function add(event){
        let value = event.target.value;
        let bankname = event.target.bankname;
        //console.log(bankname)
        if(value == "true"){
            navigate("/bankDetails");
        }
        else{
            navigate("/addAccount");
        }
     }




        return (

        <div className="acc">
            <HeaderLogout/>
            <div className='container'>
                <div className="banks" >
                    <div className="row">

                        <div className="col-lg-6">
                            <h3 className="l-nl-banks">Linked Accounts</h3>
                            {cards}
                        </div>
                        <div className="col-lg-6">
                            <h3 className="l-nl-banks">Non Linked Accounts</h3>
                            {cards1}

                        </div>

                    </div>

                </div>



        </div>
        </div>
          );
        }

export default Accounts;
