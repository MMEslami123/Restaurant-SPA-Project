import "./Cart.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import SectionTitles from "../../components/sectionTitles/SectionTitles";
import { useParams } from "react-router-dom";
function Cart() {
  return (
    <>
      <div className="cart-container bg-light-black w-100">
        <MyNavbar />
        <Container>
          <SectionTitles subject={"CART"} subSubject={"my cart"} />
        </Container>
        <section>
          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Cart;
