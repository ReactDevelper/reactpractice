import React, { useState } from "react";

const App3 = () => {
  //string variable state 
  const [value1, setvalue1] = useState("I am by default 1");
  const [value2, setvalue2] = useState("I am by default 2");
  
  //boolean variable state 
  const [condition, setCondition] = useState(true);
  
  const press1 = () => {
    setvalue1("Hellow World 1");
    setvalue2("Hellow World 2");
    setCondition(true);

  };
  
 
  return (
    <>
      <h1>{value1}</h1>
      <h1>{value2}</h1>

      <button
        onClick={press1}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
      >
        Button
      </button>
      {
        condition  ? <h2>Show me</h2>: ""
      }
      
    </>
  );
};

export default App3;
