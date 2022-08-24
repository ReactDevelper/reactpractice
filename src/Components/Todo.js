import React, { useState } from "react";

const Todo = () => {
  const data = [
    { ID: 1, Name: "Abubakr", Age: 22 },
    { ID: 2, Name: "Umer", Age: 23 },
    { ID: 3, Name: "Usman", Age: 24 },
    { ID: 4, Name: "Ali", Age: 25 },
  ];
  const [mydata, setmydata] = useState(data);
  const clear = () => {
    setmydata();
  };
  const remove = (ID) => {
    // alert(ID);
    const mynewdata = mydata.filter((anyting) => {
      return anyting.ID != ID;
    });
    setmydata(mynewdata);
  };
  return (
    <>
      {mydata.map((anyting) => (
        <div className="text-white bg-gradient-to-r from-purple-500 via-purple-500 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focsus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <h1 className="p-10 font-mono text-xl">
            Name : {anyting.Name} & ID : {anyting.ID} & Age : {anyting.Age}
            <button
              onClick={() => remove(anyting.ID)}
              class="bg-red-600 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-7 "
              type="button"
            >
              <i class="fa-solid fa-trash-can"></i> remove
            </button>
          </h1>
        </div>
      ))}
      <div>
        <div className="flex justify-center items-center flex-col mt-44">
          <button
            onClick={clear}
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-500 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 text-2xl"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
