import { useEffect, useState, useContext } from "react";
import "./FoodCard.css";
import { myContext } from "../../../App";
import axios from "axios";
import CounterBtn from "../../counterBtn/CounterBtn";

function FoodCard({ id, image, title, price, onFoodCountChange }) {
  const [food, setFood] = useState([]);
  const { cartCount, setCartCount } = useContext(myContext);
  const increaseHandler = () => {
    const updateCount = food.foodCount + 1;
    axios
      .patch(`http://localhost:3004/menuCards/${id}`, {
        foodCount: updateCount,
      })
      .then((res) => {
        setFood(res.data);
        setCartCount((prev) => prev + 1);
      });
  };

  const decreaseHandler = () => {
    const updateCount = food.foodCount - 1;
    axios
      .patch(`http://localhost:3004/menuCards/${id}`, {
        foodCount: updateCount,
      })
      .then((res) => {
        setFood(res.data);
        setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
        onFoodCountChange();
      });
  };
  useEffect(() => {
    axios.get(`http://localhost:3004/menuCards/${id}`).then((res) => {
      setFood(res.data);
    });
  }, [id]);

  return (
    <div className="food-container d-flex flex-column align-items-center my-4 gap-3 py-4">
      <div className="img-container d-inline-block rounded-circle p-2 my-4">
        <img className="img-fluid rounded-circle" src={image} alt="" />
      </div>
      <div className="addFood-concept-container d-inline-block text-center">
        <p className="addFood-concept-header text-white-50 d-flex flex-column justify-content-center gap-2 m-0">
          <span className="addFood-title text-white fw-bold position-relative z-1 poppins-font py-3">
            {title}
          </span>
          <span className="dark-gold fw-bold">{price}</span>
        </p>
      </div>
      <div className="text-center w-100">
        <CounterBtn
          number={food.foodCount}
          onIncreasment={increaseHandler}
          onDeacresement={decreaseHandler}
        />
      </div>
    </div>
  );
}

export default FoodCard;
