import React from "react";
import Items from "./items";
import AddItem from "../addButton";
import uuid from "react-uuid";

function ItemsDisplay() {
  const data = [
    { name: "Eat", id: uuid() },
    { name: "Sleep", id: uuid() },
    { name: "Repeat", id: uuid() },
  ];

  const [list, updateList] = React.useState(data);
  console.log(list);

  return (
    <div className="shadow-xl border-2 rounded-3xl mx-96 mt-5 border-grey   ">
      <AddItem setData={updateList} />
      {list.map((task) => (
        <Items key={uuid()} updateList={updateList} list={list} task={task} />
      ))}
    </div>
  );
}

export default ItemsDisplay;
