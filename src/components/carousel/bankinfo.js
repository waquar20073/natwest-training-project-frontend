import Carousel from 'react-bootstrap/Carousel';
import Header from '../header/header';
import './bankinfo.css';

function Bankinfo() {
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
    <Header/>
   
    <Carousel id="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="bankinfo"
          src="https://i2-prod.business-live.co.uk/incoming/article19067326.ece/ALTERNATES/s1200d/3_NatWest-launches-new-savings-account.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p style={{fontSize:"18px"}}>Our Purpose in action</p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="bankinfo"
          src="https://finpedia.co/bin/download/NatWest%20Group/WebHome/NWG1.jpg?rev=1.1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Tomorrow begins today</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bankinfo"
          src="https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000262132261.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p style={{fontSize:"18px"}}>
            Thrive Together
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    
    <div className='container' >
        <h1 id="home_title">What's New ?</h1>
        <br></br>
        <div className='row'>
          <div className='col-lg-4'>
            <div class="card">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMG9mZmljZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Payee API</h5>
                <p class="card-text">Commercial Customers can now embed confirmation of Payee in their own systems</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div class="card">
              <img class="card-img-top" src="https://media.istockphoto.com/photos/writing-in-notebook-closeup-picture-id1080259016?k=20&m=1080259016&s=612x612&w=0&h=sgVODsfYPU_oDWeDkfJZLgwEu6u95dP_6EQzlfmMX8E=" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">VRP</h5>
                <p class="card-text">NatWest customers have made the UK's first non-sweeping VRP payments</p>
                <a href="#" >Read More</a>
              </div>
            </div>
            
          </div>
          <div className='col-lg-4'>
            <div class="card">
              <img class="card-img-top" src="https://media.istockphoto.com/photos/portrait-of-diverse-business-people-giving-fist-bump-in-circle-picture-id1322907637?k=20&m=1322907637&s=170667a&w=0&h=r1kHFppqZ22-W01dJG5Ak-2I6y1wQXCFDsOhdWADlY0=" alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Direct Access APIs</h5>
                <p class="card-text">Find out how you can integrate your transaction data with your own systems</p>
                <a href="#" >Read More</a>
              </div>
            </div>
            
          </div>
        </div>
        <br></br>
    </div>
    </div>
  );
}

export default Bankinfo;