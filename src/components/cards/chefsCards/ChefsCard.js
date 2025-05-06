import "./ChefsCard.css";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function ChefsCard({ image, fullName, expert }) {
  return (
    <div className="chefs-container">
      <img className="img-fluid w-100" src={image} alt="" />
      <div className="info-container">
        <div className="member-info">
          <p className="m-0 fs-5 playFair-font-semi">{fullName}</p>
          <p className="m-0 fst-italic" style={{ fontSize: "14px" }}>
            {expert}
          </p>
        </div>
        <p className="socials d-flex justify-content-center gap-4 fs-5 my-3">
          <BsTwitterX />
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </p>
      </div>
    </div>
  );
}

export default ChefsCard;
