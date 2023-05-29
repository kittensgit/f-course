import React, { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((actual) => actual - 1)
    }

    const decrement = () => {
        setCount((actual) => actual - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
