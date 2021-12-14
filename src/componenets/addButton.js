import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import uuid from "react-uuid";

function AddItem({ setData }) {
  const [add, addItem] = useState("");
  const [error, setError] = useState(false);
  console.log(add);

  function handleSubmit(e) {
    e.preventDefault();
    if (add === "") {
      setError(true);
    } else {
      setData((oldArray) => [...oldArray, { name: add, id: uuid() }]);
    }
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
        type="submit"
        onClick={handleSubmit}
        className=" shadow-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold p-2 mt-5"
      >
        Add Item
      </button>
      {error ? (
        <Alert className="mt-2" variant="danger">
          You need to enter a Todo
        </Alert>
      ) : null}
    </form>
  );
}
export default AddItem;
