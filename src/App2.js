import React, { useState } from 'react'

const App2 = () => {

    const [class1, setClass1] = useState("");
const handlechange = ()=>{
setClass1("hi i am new")
}

  return (
    <div>
        <h2>9th</h2>
        {class1}
        <br/>
        <button
        onClick={handlechange}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        
        >
            change
        </button>
    </div>
  )
}

export default App2