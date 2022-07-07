import React from "react";

function Input(props) {
  return (
    <div className="relative">
      <div className="flex items-center bg-gray-100 h-16 align-middle  px-5 text-xl border-2 border-red-100 w-full overflow-hidden">
        {props.data != "" ? props.data : "0"}
      </div>
      <span className="absolute top-4 right-2 text-blue-800 font-bold text-2xl">
        {props.operator}
      </span>
    </div>
  );
}

export default Input;
