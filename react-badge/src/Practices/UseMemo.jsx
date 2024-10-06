import React, { memo } from 'react'

const UseMemo = () => {
  console.log("child component");
  
   
   
  return (
    <div>
      child component
      {/* <button onClick={increment}>increment</button> */}
    </div>
  )
}

export default  memo(UseMemo)
