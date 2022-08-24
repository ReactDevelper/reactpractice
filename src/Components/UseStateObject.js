import React, { useState } from "react";

const UseStateObject = () => {
  const [myobject, setmyobject] = useState({
    Name: "Abdullah Baig",
    Age: 23,
    Degree: "BSCS",
  });
  const press = () => {
    // setmyobject({Name : "Ali Raza" , Age : 24 , Degree : 'BS Software Engineering'});
    // in three dots when we mention the name of object it change only those value that we write in the setmyobject..and the other value show as it is (Three dots is called spread operator)
    setmyobject({ ...myobject, Name : "Daniyal Waris"  });
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-44">
        <div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focsus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <h1 className="p-10 font-mono text-3xl">
            Name : {myobject.Name} & Age : {myobject.Age} & Degree :{" "}
            {myobject.Degree}
          </h1>
        </div>
        <button
          onClick={press}
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 text-2xl"
        >
          Update
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
