import React, { useState } from "react";
import Items from "./items";
import AddItem from "../addButton";

function ItemsDisplay() {
  const [data, setData] = useState([
    { name: "Eat" },
    { name: "Sleep" },
    { name: "Repeat" },
  ]);
  const [list, updateList] = React.useState(data);
  console.log(list);

  return (
    <div className="shadow-xl border-2 rounded-3xl mx-96 mt-5 border-grey   ">
      <AddItem setData={setData} />
      {data.map((task) => (
        <Items
          key={task.name}
          updateList={updateList}
          list={list}
          task={task}
        />
      ))}
    </div>
  );
}

export default ItemsDisplay;
