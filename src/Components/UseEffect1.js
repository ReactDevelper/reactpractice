import React, { useEffect } from 'react'

const UseEffect1 = () => {
  useEffect(() => {
   console.log("hello useeffect");
  }, [])
  
  return (
    <div>UseEffect1</div>
  )
}

export default UseEffect1