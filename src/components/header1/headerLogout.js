import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './headerLogout.css';
function HeaderLogout() {

  return (
    <Navbar  expand="lg" class="navbar">
      <Container>
       <img src="Capture.PNG" alt="" id="logo" ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link  id="nav-links1" href="/home"><img id="home_icon1" alt="" src="home.png"></img>Home</Nav.Link>
            
            <Nav.Link className="logout" id="nav-links1" href="/login"><img id="logout_icon" alt="" src="logout_icon.png"></img>Logout</Nav.Link>
           
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderLogout;