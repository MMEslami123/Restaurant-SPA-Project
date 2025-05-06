import "./Cart.css";
import { Container } from "react-bootstrap";
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
      </div>
    </>
  );
}

export default Cart;
