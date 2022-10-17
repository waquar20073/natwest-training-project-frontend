import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { Link } from "react-router-dom";
function Header() {

  return (
    <Navbar  expand="lg" class="navbar">
      <Container>
       <img src="Capture.PNG" alt="" id="logo" ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Link to="/home" id="nav-links" href="" style={{textDecoration:"none"}}><img id="home_icon" alt="" src="home.png" ></img>Home</Link>
            
            <Link to="/login" className="login1" id="nav-links" href="" style={{textDecoration:"none"}}><img id="login_icon" alt="" src="login.png"></img>Login </Link>
            
            <Link to="/signup" className="register_title" id="nav-links" href="" style={{textDecoration:"none"}}><img id="register_icon" alt="" src="register.png"></img>Register</Link>

               
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;