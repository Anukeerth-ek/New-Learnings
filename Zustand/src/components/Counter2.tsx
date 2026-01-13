import React from 'react'
import { userStore } from '../store'

const Counter2 = () => {
  const { count, incrementFn, decrementFn }:any = userStore()
      
    return (
        <div >
            <h2>{count}</h2>
            <button onClick={incrementFn}>Increment2</button>
            <button onClick={decrementFn}>Decrement2</button>
        </div>
    )
}

export default Counter2