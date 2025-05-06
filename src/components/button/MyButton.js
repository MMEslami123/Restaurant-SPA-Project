import "./MyButton.css";
function MyButton({text ,onClickBtn}) {
  return <span className="button" onClick={onClickBtn}>{text}</span>;
}

export default MyButton;
