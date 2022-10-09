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
            <Nav.Link  id="nav-links" href="/home">Home</Nav.Link>
            <div className = "login-signup">
                <Nav.Link  id="nav-links" href="/login">Login</Nav.Link>
                <Nav.Link  id="nav-links" href="/signup">Register</Nav.Link>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;