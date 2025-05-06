import "./WhyUsCard.css";
function WhyUsCard({ number, title, desc }) {
  return (
    <div className="card-container h-100">
      <p className="dark-gold fs-3 fw-bold">{number}</p>
      <h4 className="playFair-font text-white my-4">{title}</h4>
      <p className="text-white-50">{desc}</p>
    </div>
  );
}

export default WhyUsCard;
