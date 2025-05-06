import { Col, Row } from "react-bootstrap";
import "./EventCard.css";
function EventCard({ image, title, price, featuresTitle, features, desc }) {
  return (
    <Row>
      <Col lg="6" className="mt-5">
        <img src={image} alt="" />
      </Col>
      <Col lg="6" className="mt-5 text-white">
        <h3 className="fs-2 playFair-font-semi">{title}</h3>
        <p className="fs-3 fw-bold">
          <span className="event-price">{price}</span>
        </p>
        <p className="fs-6 fst-italic">{featuresTitle}</p>
        <ul className="ps-0">
          {features.map((feature) => (
            <li className="fs-6 my-2" key={feature.featureId}>
              <span className="fs-5 dark-gold">{feature.icon}</span>
              <span className=" px-2">{feature.text}</span>
            </li>
          ))}
        </ul>
        <p className="fs-6">{desc}</p>
      </Col>
    </Row>
  );
}

export default EventCard;
