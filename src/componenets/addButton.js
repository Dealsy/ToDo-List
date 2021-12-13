import React, { useState } from "react";

function AddItem({ setData }) {
  const [add, addItem] = useState("");
  console.log(add);

  function handleSubmit(e) {
    e.preventDefault();
    setData((oldArray) => [...oldArray, { name: add }]);
  }

  return (
    <form>
      <input
        type="text"
        className="shadow-xl border-2 border-blue-500 rounded mt-5 p-2 mr-2"
        placeholder="Type a new item here"
        onChange={(e) => addItem(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className=" shadow-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold p-2 mt-5"
      >
        Add Item
      </button>
    </form>
  );
}
export default AddItem;
