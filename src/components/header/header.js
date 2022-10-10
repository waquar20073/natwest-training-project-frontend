import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
function Header() {

  return (
    <Navbar  expand="lg" class="navbar">
      <Container>
       <img src="Capture.PNG" alt="" id="logo" ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link  id="nav-links" href="/home"><img id="home_icon" alt="" src="home.png"></img>Home</Nav.Link>
            
            <Nav.Link  className="login1" id="nav-links" href="/login"><img id="login_icon" alt="" src="login.png"></img>Login </Nav.Link>
            <Nav.Link  className="register_title" id="nav-links" href="/signup"><img id="register_icon" alt="" src="register.png"></img>Register</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;