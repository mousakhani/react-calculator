import React from "react";
import "./css/index.css";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="mx-auto flex flex-col justify-around w-80 mt-20">
      <Input />
      <Keyboard />
    </div>
  );
}
export default App;
