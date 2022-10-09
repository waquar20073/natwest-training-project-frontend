import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
function Alerting() {
    
          return (
            <div>
            <br></br>
            <Alert id="alert" variant="primary" dismissible>
              <Alert.Heading>Money Transferred to the customer :)</Alert.Heading>
              <p>
                Thank you for choosing our bank. Have a nice day !!
              </p>
            </Alert>
            <br></br>
            <Link to="/bankDetails" style={{textDecoration: "none"}}>
            <h4 style={{textAlign:"center"}}>Go to Dashboard page</h4>
            </Link>
            <br></br>
            </div>
          );
          
}
    
export default Alerting;