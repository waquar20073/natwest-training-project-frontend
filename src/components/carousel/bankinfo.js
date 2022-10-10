import Carousel from 'react-bootstrap/Carousel';
import Header from '../header/header';
import './bankinfo.css';

function Bankinfo() {
  return (
    <div>
    <Header/>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="bankinfo"
          src="https://i2-prod.business-live.co.uk/incoming/article19067326.ece/ALTERNATES/s1200d/3_NatWest-launches-new-savings-account.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="bankinfo"
          src="https://securecdn.pymnts.com/wp-content/uploads/2021/04/NatWest-Group-SMBs-B2B.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="bankinfo"
          src="https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000262132261.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Bankinfo;