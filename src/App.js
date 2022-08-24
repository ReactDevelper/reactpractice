import React, { useState } from "react";
import HooksRules from "./Components/HooksRules";
import UseStateArray from "./Components/UseStateArray";

const App = () => {
  const [val, setval] = useState("Click on blue button");
  const change = () => {
    if (val === "Click on blue button") {
      setval("Thanks for press the button");
    } else {
      setval("Click on blue button");
    }
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col   h-96  justify-center text-center items-center ">
          <h1 className="p-3 font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
            {val} 
          </h1>
          <button
            onClick={change}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Click me
          </button>
        </div>

      </div>
<HooksRules/>
<UseStateArray/>

    </>
    
  );
};

export default App;
