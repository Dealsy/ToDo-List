import React from "react";

function Items({ task, list, updateList }) {
  const [striked, setStriked] = React.useState(false);

  const handleClick = () => {
    setStriked((s) => !s);
  };

  function handleRemoveItem(name) {
    console.log(name);
    const newList = list.filter((task) => task.name !== name);

    updateList(newList);
    console.log(newList);
  }

  return (
    <div key={task.name}>
      <div className="grid grid-cols-3 gap- content-start m-5 border-2 border-zinc-500 rounded-full  shadow-xl  ">
        <span name={task.name} className={`${striked ? "strike" : ""}`}>
          <h1>
            <b>{task.name}</b>
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
          onClick={() => handleRemoveItem(task.name)}
          className=" font-bold w-20  text-red-500 border-2 border-red-500 rounded-full  hover:bg-red-500 hover:text-white m-2  ml-24"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Items;
