import React, { Component } from 'react';
import HeaderLogout from '../header1/headerLogout';
import "./MyProfile.css";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
class MyProfile extends Component {
    render() {
        return (
            <div>
                <HeaderLogout/>
                <div >
                   
                    <div className='row' id="profile_row">

                        <div class="col-lg-3" id='profile_page1' style={{backgroundColor:"#e9ecef"}}>
                        <ul class="nav flex-column p-3">
                            <li class="nav-item mb-2 mt-3"><a class="nav-link text-dark" href="#"><h5>Features</h5></a></li>
                            <Link to="/statements" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link" href="#"><span className="ml-3">Bank Statements</span></a></li>
                            </Link>
        
                            <Link to="/transactions" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link" href="#"><span className="ml-3">Transaction History</span></a></li>
                            </Link>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <hr style={{marginLeft:"10px",marginRight:"60px"}}></hr>
                            <li class="nav-item mb-2"><a class="nav-link" href="#"><span className="ml-3"><img src="reset_password.png" alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Reset Password</span></a></li>
                            <Link to="/login" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link " href="#"><span className="ml-3"><img src="logout.png" alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Logout</span></a></li>   
                            </Link>
                        </ul>
                            
                        </div>

                    

                        <div class="col-lg-6" id='profile_page2'>
                            <h1 class='details'>Customer Details</h1>
                            <table class="table table-secondary table-borderless" id="details_table" >
                              <tbody>
                                <tr><td></td><td></td></tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Full name</td>
                                <td >John Snow</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Age</td>
                                <td >21</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Account No</td>
                                <td>5252552252</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>IFSC code</td>
                                <td >SBI1254687434</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Location</td>
                                <td>Bangalore,India</td>
                                </tr>
                                <tr><td></td><td></td></tr>
                                </tbody>
                            </table>
                            <div >
                       
                   
                    </div>
                        </div>
                        
                        <div class="col-lg-3" id='profile_page3'>
                            
                            <div class="card" id='profile_card'> 
                                <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap"></img>
                                <div class="card-body little-profile text-center">
                                    <div class="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user"></img></div>
                                    <h3 class="m-b-0">John Snow</h3>
                                    <br></br>
                                   
                                </div>
                                <div className='details text-center'>
                                    <div className='phone_no'><img src="phonenumber.png" alt="" id="phone_no"></img>5757541255</div>
                                    <div className='email'><img src="email.png" alt="" id="email"></img>john@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>  
        );
    }
}

export default MyProfile;