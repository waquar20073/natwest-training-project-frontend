import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './headerLogout.css';
import { Link } from "react-router-dom";
function HeaderLogout() {

  return (
    <Navbar  expand="lg" class="navbar1">
      <Container>
       <img src="Capture.PNG" alt="" id="logo" ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Link  to="/account" id="nav-links1" href="" style={{textDecoration:"none"}}><img id="home_icon1" alt="" src="home.png"></img>Bank of APIs</Link>
            
            <Link to="/login" className="logout" id="nav-links1" href="" style={{textDecoration:"none"}}><img id="logout_icon" alt="" src="logout_icon.png"></img>Logout</Link>
           
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderLogout;