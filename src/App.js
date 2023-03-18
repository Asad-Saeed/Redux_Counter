import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/action";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main_container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="container">
          <a
            onClick={() => {
              dispatch(decNumber(5));
            }}
            className="quantity_minus"
            title="Decrement"
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            onClick={() => {
              dispatch(incNumber(5));
            }}
            className="quantity_plus"
            title="Increment"
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
