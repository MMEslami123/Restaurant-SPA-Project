import { Col, Container, Form, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import SectionTitles from "../../components/sectionTitles/SectionTitles";
import "./BookTable.css";
import MyButton from "../../components/button/MyButton";
import Footer from "../../components/footer/Footer";
function BookTable() {
  return (
    <>
      <div className="bookTable-container bg-light-black w-100">
        <MyNavbar />
        <Container>
          <SectionTitles subject={"RESERVATION"} subSubject={"Book a Table"} />
          <Row className="bookTable-row">
            <Col lg="4" md="6" className="my-3">
              <Form.Control type="text" placeholder="Your Name" />
            </Col>
            <Col lg="4" md="6" className="my-3">
              <Form.Control type="email" placeholder="Your Email" />
            </Col>
            <Col lg="4" md="6" className="my-3">
              <Form.Control type="tel" placeholder="Your Phone" />
            </Col>
            <Col lg="4" md="6" className="my-3">
              <Form.Control type="date" />
            </Col>
            <Col lg="4" md="6" className="my-3">
              <Form.Control type="time" />
            </Col>
            <Col lg="4" md="6" className="my-3">
              <Form.Control type="number" placeholder="# Of People" />
            </Col>
            <Col sm="12" className="my-3">
              <Form.Control
                as="textarea"
                placeholder="Message"
                rows={6}
                style={{ resize: "unset" }}
              />
            </Col>
            <div className="mybutton mt-3 text-center">
              <MyButton text={"Book a Table"} />
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default BookTable;
