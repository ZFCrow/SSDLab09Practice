import { useState } from 'react'
import './App.css'
import Button from './Components/button.jsx' 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button label="Click Me!" onClick={() => setCount(count + 1)} /> 
    <p id="click-count">{count}</p>
    </>
  )
}

export default App
