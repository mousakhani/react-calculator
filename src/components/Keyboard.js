import React from "react";

function Keyboard(props) {
  return (
    <div className="flex flex-col">
      <div className="flex border-t-2 justify-between">
        <button
          onClick={(e) => props.numberClick(e)}
          value="ce"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2 "
        >
          CE
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="c"
          className="w-1/4 flex-none  py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r "
        >
          C
        </button>
        <button
          onClick={(e) => props.operatorClick(e)}
          value="+"
          className="w-1/4 flex-none py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-l "
        >
          +
        </button>
      </div>

      <div className="flex border-t-2 justify-between">
        <button
          onClick={(e) => props.numberClick(e)}
          value="7"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          7
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="8"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          8
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="9"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          9
        </button>
        <button
          onClick={(e) => props.operatorClick(e)}
          value="-"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer "
        >
          -
        </button>
      </div>

      <div className="flex border-t-2 justify-between">
        <button
          onClick={(e) => props.numberClick(e)}
          value="4"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          4
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="5"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          5
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="6"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          6
        </button>
        <button
          onClick={(e) => props.operatorClick(e)}
          value="*"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer "
        >
          *
        </button>
      </div>

      <div className="flex border-t-2 justify-between">
        <button
          onClick={(e) => props.numberClick(e)}
          value="1"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          1
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="2"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          2
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="3"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          3
        </button>
        <button
          onClick={(e) => props.operatorClick(e)}
          value="/"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer "
        >
          /
        </button>
      </div>

      <div className="flex border-t-2 justify-between">
        <button
          onClick={(e) => props.numberClick(e)}
          value="+-"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          +-
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="0"
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          0
        </button>
        <button
          onClick={(e) => props.numberClick(e)}
          value="."
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer border-r-2"
        >
          .
        </button>
        <button
          onClick={(e) => props.operatorClick(e)}
          value="="
          className="w-full py-4 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer "
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
