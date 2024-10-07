import React, { useReducer } from 'react'



const initialvalue=0;
const reducer =(state,action)=>{
    switch(action){
      case 'increment':
        return state=state+1
        case 'decrement':
          return state=state-1
        case 'reset':
          return initialvalue
          default:
            return state
    }
}
const Reducer = () => { 
const [state,dispatch]=useReducer(reducer,initialvalue);
const isEven=state%2===0
  return (
    <div>
      <h1>{state}</h1>
      <div style={{background:isEven?'red':'blue',width:'100px',height:'100px'}}></div>
      <button onClick={()=>{dispatch('increment')}}>+</button>
      <button onClick={()=>{dispatch('reset')}}>reset</button>
      <button onClick={()=>{dispatch('decrement')}}>-</button>
    </div>
  )
}

export default Reducer
