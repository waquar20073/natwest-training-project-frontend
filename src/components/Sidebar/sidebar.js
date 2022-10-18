import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (  
        <div id="sidebar">
                 <div class="sidebar-offcanvas"  role="navigation" style={{backgroundColor:"#e9ecef"}}>
                        <ul class="nav flex-column sticky-top pl-0 pt-4 p-3 mt-3 ">
                            <li class="nav-item mb-2 mt-3"><a class="nav-link text-dark" href="#"><h5>Features</h5></a></li>
                            <Link to="/profile" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3"><img src="profile.png" alt="" style={{width:"18px",height:"18px",marginRight:"8px",marginBottom:"5px"}}></img>My Profile</span></a></li>
                            </Link>
                            <Link to="/account" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Choose Bank</span></a></li>
                            </Link>
                            <Link to="/bankDetails" style={{textDecoration:"none"}}>
                            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><span className="ml-3">Bank Account Summary</span></a></li>
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
                        </ul>
                    </div>
            </div>
  )
}
