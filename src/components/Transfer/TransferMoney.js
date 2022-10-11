import React, { Component } from 'react';
import "./TransferMoney.css";
import { Link } from "react-router-dom";
import { Row , Col, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import HeaderLogout from '../header1/headerLogout';
function TransferMoney() {
    
  return (
    
    <div>
            <HeaderLogout/>
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
                                <Link to="/statements" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Bank Statements</span></a></li>
                                </Link>
                                <Link to="/transfer" style={{textDecoration:"none"}}>
                                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Transfer Money</span></a></li>
                                </Link>
                                <Link to="/transactions" style={{textDecoration:"none"}}>
                                    <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Transaction History</span></a></li>
                                </Link>
                                <br></br>
                                <br></br>
                                <Link to="/login" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="logout.png"alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Logout</span></a></li>   
                                </Link>
                            </ul>
                            </div>
                        </div>
                    </Col >

               

                    <Col lg={8}>
                    <div id= "transfer_form" className='text-center'>
                    <h2 id="money_transfer_title">Money Transfer</h2>
                    <Form>
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
                            <Form.Control type="text" placeholder="Bank Account Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="IFSC Code" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Account Holder Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="number" placeholder="Amount" />
                        </Form.Group>
                        <h6 id="transactions_charges">Transaction Charges :</h6>
                        <Link to="/alert">
                            <Button id="transfer_button">Transfer</Button>
                        </Link>
                        
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


export default TransferMoney;