import "./AddFood.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Container, Row } from "react-bootstrap";
import MyButton from "../../components/button/MyButton";
import CounterBtn from "../../components/counterBtn/CounterBtn";
import { myContext } from "../../App";
function AddFood() {
  const cartId = useParams().cartId;
  const [food, setFood] = useState([]);
  const { cartCount, setCartCount } = useContext(myContext);
  const [number, setNumber] = useState(cartCount);
  console.log(cartCount);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/menuCards/${cartId}`)
      .then((res) => setFood(res.data));
  }, []);
  const addCount = () => {
    setNumber((prev) => prev + 1);
    setFood({ ...food, foodCount: 1 });
  };
  const increaseHandler = () => {
    setNumber((prev) => prev + 1);
    const updateCount = food.foodCount + 1;

    axios
      .patch(`http://localhost:3004/menuCards/${cartId}`, {
        foodCount: updateCount,
      })
      .then((res) => setFood(res.data));
  };
  const decreaseHandler = () => {
    if (number === 0) setNumber(0);
    else {
      setNumber((prev) => prev - 1);
      const updateCount = food.foodCount - 1;
      axios
        .patch(`http://localhost:3004/menuCards/${cartId}`, {
          foodCount: updateCount,
        })
        .then((res) => setFood(res.data));
    }
  };
  useEffect(() => {
    setCartCount(number);
  }, [number]);
  return (
    <>
      <div className="addFood-container bg-light-black">
        <MyNavbar stickyToTop={true} />
        <Container className="d-flex justify-content-center">
          <Row className="addFood-card align-items-center w-50 rounded rounded-4 py-4">
            <div className="addFood-img-container text-center rounded-circle">
              <svg width="250" height="250" viewBox="0 0 300 300">
                <defs>
                  <clipPath id="starClip">
                    <path
                      d="M 10 1.2265625 L 7.9960938 6.2988281 L 2.78125 4.7011719 
           L 5.5 9.4296875 L 1 12.511719 L 6.390625 13.335938 
           L 5.9941406 18.773438 L 10 15.074219 
           L 14.005859 18.773438 L 13.607422 13.335938 
           L 19 12.511719 L 14.5 9.4296875 
           L 17.216797 4.7011719 L 12.001953 6.2988281 
           L 10 1.2265625 z"
                      transform="scale(15)"
                    />
                  </clipPath>
                </defs>

                <image
                  href={food.image}
                  width="300"
                  height="300"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#starClip)"
                />
              </svg>
            </div>
            <div className="addFood-concept-container d-inline-block text-center">
              <p className="addFood-concept-header text-white-50 d-flex flex-column justify-content-center gap-2 m-0">
                <span className="addFood-title  text-white fw-bold position-relative z-1 poppins-font py-3">
                  {food.title}
                </span>
                <span className="addFood-price dark-gold fw-bold">
                  {food.price}
                </span>
              </p>
              <div className="">
                <p className=" w-50 text-white opacity-25 poppins-font fst-italic mt-3 mx-auto">
                  {food.ingredients}
                </p>
              </div>
            </div>
            <div className="text-center">
              {food.foodCount === 0 ? (
                <MyButton onClickBtn={addCount} text={"Add"} />
              ) : (
                <CounterBtn
                  number={food.foodCount}
                  onIncreasment={increaseHandler}
                  onDeacresement={decreaseHandler}
                />
              )}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AddFood;
