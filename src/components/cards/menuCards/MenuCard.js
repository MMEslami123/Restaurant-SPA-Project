import { NavLink, useParams } from "react-router-dom";
import "./MenuCard.css";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function MenuCard({ id, image, title, price, ingredients }) {
  // const cartId = useParams().cartId;
  // const [menuCard, setMenuCard] = useState({});
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3004/menuCards/${cartId}`)
  //     .then((res) => setMenuCard(res.data));
  // }, []);
  // console.log(cartId);

  return (
    <>
      <div className="menu-img-container d-inline-block rounded-circle p-2 my-4">
        <img className="img-fluid rounded-circle" src={image} alt="" />
      </div>
      <div className="menu-concept-container d-inline-block">
        <p className="menu-concept-header text-white-50 d-flex justify-content-between m-0">
          <NavLink
            to={`/product/${id}`}
            className="menu-title bg-black text-white fw-bold pe-2 position-relative z-1 poppins-font"
          >
            {title}
          </NavLink>
          <span className="bg-black px-2 dark-gold fw-bold position-relative z-1">
            {price}
          </span>
        </p>
        <p className="text-white opacity-25 poppins-font fst-italic">
          {ingredients}
        </p>
      </div>
    </>
  );
}

export default MenuCard;
