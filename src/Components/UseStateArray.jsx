import React, { useState } from "react";

const UseStateArray = () => {
  const data = [
    {
      id: 1,
      myname: "Ghulam Ali",
      age: 23,
    },
    {
      id: 2,
      myname: "Ahmad",
      age: 28,
    },
    {
      id: 3,
      myname: "Ghulam Mustafa",
      age: 24,
    },
  ];
  const [myarray, setmyarray] = useState(data)
  const handle = () => {
  setmyarray();

  
  

  }
  return (
    <>
      {myarray.map((giveanyname,index) => {
        return (
          <h1 className="bg-green-300  " key={index}>
            ID {giveanyname.id} : & Name {giveanyname.myname} : & Age{" "}
            {giveanyname.age} :{" "}
          </h1>
        );
      })}
      <button onClick={handle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
        Clear 
      </button>
    </>
  );
};

export default UseStateArray;
