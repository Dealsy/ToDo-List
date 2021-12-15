import React, { useState } from "react";
import uuid from "react-uuid";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Items({ task, list, updateList }) {
  const [striked, setStriked] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  console.log(input);

  const handleClick = () => {
    setStriked((s) => !s);
  };

  function handleRemoveItem(id) {
    const newList = list.filter((task) => task.id !== id);

    updateList(newList);
    console.log("new", newList);
  }

  function updateTodo(e) {
    e.preventDefault();
    const value = input;
    console.log(value);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Your Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="border-2 border-zinc-400 p-2 w-96 rounded-lg"
            type="textarea"
            name="editField"
            onChange={(e) => setInput(e.target.value)}
            placeholder={task.name}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="success">Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="flex justify-center " key={uuid()}>
      <div className="grid grid-cols-4  content-start m-2 border-2 border-zinc-500 rounded-full p-2  shadow-xl">
        <span name={task.name} className={`${striked ? "strike" : ""}`}>
          <h1>
            <b className="text-2xl font-serif">{task.name}</b>
          </h1>
        </span>
        <div className="contents"></div>
        <button
          onClick={handleClick}
          className=" font-bold w-20  text-green-500 border-2 border-green-500 rounded-full  hover:bg-green-500 hover:text-white m-2  ml-24"
        >
          ✓
        </button>
        <button
          onClick={() => setModalShow(true)}
          className=" font-bold w-20   text-yellow-500 border-2 border-yellow-500 rounded-full  hover:bg-yellow-500 hover:text-white m-2  ml-24"
        >
          <i className="fa fa-pencil"></i>
        </button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <button
          onClick={() => handleRemoveItem(task.id)}
          className=" font-bold w-20  text-red-500 border-2 border-red-500 rounded-full  hover:bg-red-500 hover:text-white m-2  ml-24"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Items;
