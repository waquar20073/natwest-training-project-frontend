import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './Accounts.css'
import { Link } from "react-router-dom";
import Dashboard from '../BankDetails/Dashboard';
import { Button } from 'react-bootstrap';
import HeaderLogout from '../header1/headerLogout';
function Accounts(){

    
    
    
    
        
        return (
         
        <div className="acc">
        <HeaderLogout/> 

        
        <div className='container'>

                <div className="banks">
                    <div class="row">
                        <h3 class="l-nl-banks">Linked Accounts</h3>
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body text-center">
                                
                                    <img id="i1" src="SBI-logo.svg.png" alt=""></img>
                                    <h5 class="card-title">State Bank of India</h5> 
                                
                                <Link to="/bankDetails">
                                <a href="" class="btn btn-primary">Enter</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body text-center">
                                <img id="i2" src ="rbs.jpg" alt=""></img>
                                <h5 class="card-title">Royal Bank of Scotland</h5>
                                <Link to="/bankDetails">
                                <a href="" class="btn btn-primary ">Enter</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body text-center">
                                <img id="i3" src="hdfc.jpg" alt=""></img>
                                <h5 class="card-title">HDFC Bank</h5>
                                <Link to="/bankDetails">
                                <a href="" class="btn btn-primary">Enter</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>


                    <br></br>

                    <div class="row">
                    <h3 class="l-nl-banks">Non-Linked Accounts</h3>
                    
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body text-center">
                                <img id="i4" src="icici.png" alt=""></img>
                                <h5 class="card-title">ICICI Bank</h5>
                                <Link to="/bankDetails">
                                <a href="" class="btn btn-primary">Add</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                    
                    
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body text-center">
                                <img id="i5" src="canara.jpg" alt=""></img>
                                <h5 class="card-title">Canara Bank</h5>
                                <Link to="/bankDetails">
                                <a href="/bankDetails" class="btn btn-primary">Add</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body text-center">
                                <img id="i6" src="standard-chartered.png" alt=""></img>
                                <h5 class="card-title">Standard Chatered Bank</h5>
                                <Link to="/bankDetails">
                                <a href="/bankDetails" class="btn btn-primary">Add</a>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    </div>
            </div>
            </div>
        );
    }


export default Accounts;