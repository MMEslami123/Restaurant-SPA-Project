import { ImBin } from "react-icons/im";
import "./CounterBtn.css";
import { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";

function CounterBtn({ number, onIncreasment, onDeacresement }) {

  return (
    <>
      <div className="counter-container">
        <span onClick={onDeacresement} className="decrease hov">
          {number === 1 ? <ImBin /> : <LuMinus />}
        </span>
        <span>{number}</span>
        <span onClick={onIncreasment} className="increase hov">
          <IoMdAdd />
        </span>
      </div>
    </>
  );
}

export default CounterBtn;
