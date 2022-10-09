import {useState} from 'react';
import { Row , Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Table from 'react-bootstrap/Table';

 
 
const Dashboard = () => {

    
   
   
 
  
    
   
    return (
    <div class="col main pt-3 mt-3">
         <Row id="main_row">
            <Col lg={3}>
                <div id="sidebar">
                 <div class="sidebar-offcanvas"  role="navigation" style={{backgroundColor:"#e9ecef"}}>
                        <ul class="nav flex-column sticky-top pl-0 pt-4 p-3 mt-3 ">
                            <li class="nav-item mb-2 mt-3"><a class="nav-link text-dark" href="#"><h5>Features</h5></a></li>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="profile.png" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"5px"}}></img>My Profile</span></a></li>
                            <Link to="/account" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Choose Bank</span></a></li>
                            </Link>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Reports</span></a></li>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Bank Statements</span></a></li>
                            <Link to="/transfer" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Transfer Money</span></a></li>
                            </Link>
                            <Link to="/transactions" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Transaction History</span></a></li>
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to="/login" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="logout.png" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Logout</span></a></li>   
                            </Link>
                        </ul>
                    </div>
                    </div>
            </Col >


            <Col lg={9}>  
            <div id="features">
                <div class="row mb-3">
                    <div class="col-lg-4 col-sm-6 py-2">
                        <div class="card bg-success text-white h-100 text-center" id="dashboard_cards">
                                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                                        <h6 class="text-uppercase">Balance</h6>
                                        <img style={{width:"50px",height:"auto"}}src="cash.png"></img>  
                                    </div>
                        </div>
                    </div>                       
                    <div class="col-lg-4 col-sm-6 py-2">
                        <div class="card text-white bg-danger h-100 text-center" id="dashboard_cards">
                            <div class="card-body bg-danger ">
                                <h6 class="text-uppercase " style={{color:"white"}}>Income</h6>
                                <img style={{width:"50px",height:"auto"}}src="business-and-finance.png"></img>
                            </div>
        
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 py-2">
                        <div class="card text-white bg-warning h-100 text-center" id="dashboard_cards">
                            <div class="card-body">
                                <div class="rotate">
                                    <i class="fa fa-share fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Expense</h6>
                                <img style={{width:"50px",height:"auto"}}src="expense.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
 
                <hr/>
                <div className="row mb-3">
                    <div class="col-lg-6 col-sm-6 py-2">
                      <h4>Insights</h4>
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
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-lg-6 ">
                        <h4 className='title text-center text-secondary'>Data in Chart</h4>
                        
                    </div>
                </div>
                   
                </div>
            
               
                
                
          
            

            </Col>
        </Row>
    </div>
    )
}
 
export default Dashboard