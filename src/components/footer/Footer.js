import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"
function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <Container>
        <Row>
          <Col lg="4" md="6" className="playFair-font-semi mt-2">
            <h3 className="playFair-font-semi fs-3">
              <a href="#" className="text-white text-decoration-none">
                Restaurantly
              </a>
            </h3>
            <div
              className="opacity-75 playFair-font-regular"
              style={{ fontSize: "14px" }}
            >
              <p className="mt-4 mb-0">Iran, Tehran</p>
              <p className="m-0">first street, 4th alley, 111</p>
              <p className="mt-2 mb-0">
                <b>Phone: </b>+989123003000
              </p>
              <p>
                <b>Email: </b>info@example.com
              </p>
              <p className="footer-socials mt-4">
                <BsTwitterX />
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" className="mt-3">
            <h5 className="playFair-font-semi fs-6">Useful Links</h5>
            <ul className="Useful-Links p-0">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Terms of service</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
          </Col>
          <Col lg="2" md="3" className="mt-3">
            <h5 className="playFair-font-semi fs-6">Our Services</h5>
            <ul className="Our-Services p-0">
              <li>
                <a href="">Web Design</a>
              </li>
              <li>
                <a href="">Web Development</a>
              </li>
              <li>
                <a href="">Product Management</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
              <li>
                <a href="">Graphic Design</a>
              </li>
            </ul>
          </Col>
          <Col lg="4" className="mt-3">
            <h5 className="playFair-font-semi fs-6">Our Newsletter</h5>
            <p
              className="text-white opacity-75 m-0 "
              style={{ fontSize: "14px" }}
            >
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <InputGroup className="mt-4">
              <Form.Control
                maxLength={30}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className="" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
