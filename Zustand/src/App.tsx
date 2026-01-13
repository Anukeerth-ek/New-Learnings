import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
     <User/>
    </>
  )
}

export default App
