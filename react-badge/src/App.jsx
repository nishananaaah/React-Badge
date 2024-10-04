import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'
import Display from './Display'
import List from './Practices/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Input/>
     <Display />
     <List colors={["red","green","blue","orange"]}/>
    </>
  )
}

export default App
