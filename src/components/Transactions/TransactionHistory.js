import React, { Component } from 'react';
import "./TransactionHistory.css";
import { Row , Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import HeaderLogout from '../header1/headerLogout';
class TransactionHistory extends Component {
    render() {
        return (
            <div>
                <HeaderLogout/>
           
            <div class="col main pt-1 mt-2">
                
                <Row id="transaction_row">
                    <Col lg={3}>
                    <div id="sidebar2">
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
                                <Link to="/login" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="logout.png" alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Logout</span></a></li>   
                                </Link>
                            </ul>
                            </div>
                        </div>

                    </Col>
                    <Col lg={9}>
                        <h2 id="transaction_title">Transaction History</h2>
                        <div className='transaction_table'>
                        <form>
                        
                            <div className='row'>
                           
                            <div className='col-lg-6'>
                                <div class="form-group">
                                    <label style={{marginLeft:"5px"}}>Search</label>
                                    <input type="search" class="form-control" placeholder="Choose Bank"></input>
                                </div>
                            </div>
                           
                            
                            <div className='col-lg-3'>
                                <div class="form-group">
                                    <label  style={{marginLeft:"5px"}}>From</label>
                                    <input type="date" class="form-control" placeholder="From"></input>
                                </div>

                            </div>
                            <div className='col-lg-3'>
                                <div class="form-group">
                                    <label style={{marginLeft:"5px"}}>To</label>
                                    <input type="date" class="form-control" placeholder="From"></input>
                                </div>

                            </div>
                        </div>
                            
                            
                        </form>
                        <br></br>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Sl. No</th>
                                <th>Previous Transactions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                </tr>
                                <tr>
                                <td>4</td>
                                <td>Mark</td>
                                </tr>
                                <tr>
                                <td>5</td>
                                <td>Mark</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                        </div>
                    </Col>

                </Row>
            </div>
            </div>
        );
    }
}

export default TransactionHistory;