
import React, { useState } from "react";

const Task1 = () => {
  const data=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},]

  const [myarray, setmyarray] = useState(data);
  const handle = () => {
    setmyarray([...myarray, { id: 11 }]);
    console.log({ myarray });
  };
  return (
    <>
      {myarray.map((giveanyname, index) => {
        return (
          <h1 className="bg-green-300  " key={index}>
            {giveanyname.id}
          </h1>
        );
      })}
      <button
        onClick={handle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
      >
        Click me
      </button>
    </>
  );
};

export default Task1;
