import React, { useState } from "react";
import "./css/index.css";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");
  const numberClickHandler = (e) => {
    let newVal = e.target.value;
    if (newVal === "ce") {
      setNumber("");
      setOperator("");
      setResult("");
    } else if (newVal === "c")
      setNumber(number.toString().substring(0, number.toString().length - 1));
    else setNumber(number.toString() + newVal);
  };
  const operatorClickHandler = (e) => {
    if (number !== "" && result === "") {
      setResult(number);
    } else if (number !== "") {
      switch (operator) {
        case "*":
          setResult(Number(result) * Number(number));
          break;
        case "+":
          setResult(Number(result) + Number(number));
          break;
        case "-":
          setResult(Number(result) - Number(number));
          break;
        case "/":
          setResult(Number(result) / Number(number));
          break;
        default:
          setResult(result);
      }
    }
    setOperator(e.target.value);
    setNumber("");
    if (e.target.value === "=") setOperator("");
  };

  return (
    <div className="mx-auto flex flex-col justify-around w-80 mt-20">
      <Input data={number !== "" ? number : result} operator={operator} />
      <Keyboard
        numberClick={numberClickHandler}
        operatorClick={operatorClickHandler}
      />
    </div>
  );
}
export default App;
