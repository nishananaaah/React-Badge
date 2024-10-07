import React, { createContext, useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'


  export const userContext=createContext()
const Context = () => {
    const [count,setCount]=useState(0);
    const arr=[1,2,3,4,5];
    const fruits={
        one:'banana',
        two:'apple',
    }
  return (
    <div>
      <userContext.Provider value={{count,setCount,arr,fruits}}>
        <Component1/>
        <Component2/>
        <Component3/>
      </userContext.Provider>
    </div>
  )
}

export default Context
