import React from 'react'
import useCreate from './useCreate'

export default function Useexecute
() {
    const {count,increment,decrement,reset} = useCreate(10);
  return (
    <div>Useexecute
        <h1>Create custom Hook</h1>
        <h2>count:{count}</h2>
        <button onClick={increment}>increment</button><button onClick={decrement}>Decrement</button><button onClick={reset}>reset</button>


    </div>
  )
}
