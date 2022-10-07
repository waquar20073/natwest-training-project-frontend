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
          <Nav className="me-auto">
            <Nav.Link id="home-link" href="/home">Home</Nav.Link>
            <div class = "login-signup">
            
            
            <Nav.Link id="login" href="/login">Login</Nav.Link>
            <Nav.Link id="signup" href="/signup">Register</Nav.Link>

            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;