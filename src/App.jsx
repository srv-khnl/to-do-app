import { useState } from 'react'
import './App.css'
import TODoList from './ToDoList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TODoList />
    </>
  )
}

export default App
