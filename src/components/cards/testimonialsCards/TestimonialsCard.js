import "./TestimonialsCard.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function TestimonialsCard({ idea, image, fullName, expert }) {
  return (
    <div className="bg-light-black p-4">
      <FaQuoteLeft className="fs-6 dark-gold opacity-50 me-3" />
      <span className="fs-6 text-white opacity-50 fw-medium fst-italic">
        {idea}
      </span>
      <FaQuoteRight className="fs-6 dark-gold opacity-50 ms-3" />
      <div className="text-center mt-4">
        <p className="">
          <img className="test-img" src={image} alt="" />
        </p>
        <h3 className="fs-5 playFair-font-semi">{fullName}</h3>
        <h4 className="fs-6 playFair-font-regular opacity-75">{expert}</h4>
      </div>
    </div>
  );
}

export default TestimonialsCard;
