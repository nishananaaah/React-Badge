import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Practices/UseState'
// import ColorChange from './Practices/ColorChange'
// import Input from './Input'
// import Display from './Display'
// import List from './Practices/List'
// import Counter from './Practices/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Input/>
     <Display />
     <List colors={["red","green","blue","orange"]}/>
     <Counter/> */}
     {/* <ColorChange/> */}
     <UseState/>
    </>
  )
}

export default App
