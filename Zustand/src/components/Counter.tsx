import React from 'react'
import { userStore } from '../store'


const Counter = () => {
    const { count, incrementFn, decrementFn }:any = userStore()
    
  return (
      <div >
          <h2>{count}</h2>
          <button onClick={incrementFn}>Increment</button>
          <button onClick={decrementFn}>Decrement</button>
      </div>
  )
}

export default Counter