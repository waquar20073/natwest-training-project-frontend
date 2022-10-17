import React, { Component } from 'react';
import HeaderLogout from '../header1/headerLogout';
import "./MyProfile.css";
import { Link } from "react-router-dom";
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
                            <Link to="/account" style={{textDecoration:"none"}}>
                                <li class="nav-item mb-2"><a class="nav-link" href="#"><span className="ml-3">Choose Bank</span></a></li>
                            </Link>
                            <Link to="/transfer" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link" href="#"><span className="ml-3">Transfer History</span></a></li>
                            </Link>
        
                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <hr style={{marginLeft:"10px",marginRight:"60px"}}></hr>
                            <Link to="/reset" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link" href=""><span className="ml-3"><img src="reset_password.png" alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"3px"}}></img>Reset Password</span></a></li>
                            </Link>
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
                                <td >Johny</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Date of Birth</td>
                                <td >13-05-1998</td>
                                </tr>
                                <tr>
<<<<<<< HEAD
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Age</td>
                                <td >24</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Account No</td>
=======
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Username</td>
                                <td >24</td>
                                </tr>
                                <tr>
                                <td id="c1" style={{fontWeight:"bold",fontFamily:"Sans-serif"}}>Email</td>
>>>>>>> 73ea763 (Sidebar placed)
                                <td>9456819952</td>
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
                                    <h3 class="m-b-0">Johny</h3>
                                    <br></br>
                                   
                                </div>
                                <div className='details text-center'>
                                    <div className='phone_no'><img src="phonenumber.png" alt="" id="phone_no"></img>9456819952</div>
                                    <div className='email'><img src="email.png" alt="" id="email"></img>johny1@gmail.com</div>
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