import { Col, Container, Row } from "react-bootstrap";

function Special({ image, title, subTitle, desc }) {
  return (
    <Container>
      <Row>
        <Col lg="4" className="order-lg-5">
          <img className="special-img img-fluid" src={image} alt="" />
        </Col>
        <Col lg="8" className="order-lg-3 mt-2">
          <p className="text-white playFair-font-semi fs-3">{title}</p>
          <p className="text-white opacity-75 fst-italic">{subTitle}</p>
          <p className="text-white opacity-75">{desc}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Special;
