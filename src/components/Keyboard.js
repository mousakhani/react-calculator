import React from "react";

function Keyboard(props) {
  return (
    <div className="flex flex-col">
      <div className="flex border-t-2 justify-between">
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          7
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          8
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          9
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer ">
          +
        </button>
      </div>
      <div className="flex border-t-2 justify-between">
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          4
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          5
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          6
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer ">
          -
        </button>
      </div>
      <div className="flex border-t-2 justify-between">
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          1
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          2
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          3
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer ">
          *
        </button>
      </div>
      <div className="flex border-t-2 justify-between">
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          +-
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          0
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2">
          .
        </button>
        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer ">
          =
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
