import "./Cart.css";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../components/navbar/MyNavbar";
import SectionTitles from "../../components/sectionTitles/SectionTitles";
import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../../components/cards/foodCards/FoodCard";
function Cart() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/menuCards").then((res) => {
      setFoodList(res.data);
    });
  }, []);

  const handleFoodCountChange = () => {
     axios.get("http://localhost:3004/menuCards").then((res) => {
    setFoodList(res.data);
  });
  };
  return (
    <>
      <div className="cart-container bg-light-black w-100">
        <MyNavbar />
        <Container>
          <SectionTitles subject={"CART"} subSubject={"my cart"} />
        </Container>
        <section>
          <Container>
            <Row className="">
              {foodList
                .filter((aFood) => aFood.foodCount > 0)
                .map((aFood) => (
                  <Col
                    key={aFood.id}
                    lg="4"
                    className="align-items-center rounded rounded-4 px-4"
                  >
                    <FoodCard
                      {...aFood}
                      onFoodCountChange={handleFoodCountChange}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Cart;
