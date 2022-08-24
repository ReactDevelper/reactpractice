import React, { useEffect } from "react";


const FetchPractice = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((store) => store.json())
      .then((store) => {
        console.log(store[0].email);
        for (var a = 0; a < store.length; a++) {
          console.log(store[a].email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);




  const click = () => {};
  return (
    <div>
      <button
        onClick={click}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        click me
      </button>
    </div>
  );
};


export default FetchPractice;
