import React from "react";

function Input(props) {
  return (
    <div className="relative">
      <div className="bg-gray-100 py-3 px-5 text-xl border-2 border-red-100 w-full overflow-hidden">
        1234aljsdhf lkjhadlkfjshdflsjkl
      </div>
      <span className="absolute top-3 right-2 text-blue-800 font-bold text-2xl">
        +
      </span>
    </div>
  );
}

export default Input;
