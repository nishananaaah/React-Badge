import React,{useCallback, useMemo, useRef, useState} from 'react'
import UseMemo from './UseMemo';

const Memo = () => {
     const [counter,setCounter]=useState(0);
     const myArray=useMemo(()=>["a","b","c"],[])
    //  console.log(counter);

     const ref=useRef(0);
     console.log(ref.current++);

    const increment= useCallback(()=>{
        setCounter((currentCounter)=>currentCounter+1)
    },[setCounter])
     
     
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>increment</button>
      <UseMemo  myArray={myArray}/>
    </div>
  )
}

export default Memo
