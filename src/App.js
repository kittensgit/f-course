import React, { useState } from "react";

function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('text')

  const increment = () => {
    setLikes((actual) => actual + 1)
  }

  const decrement = () => {
    setLikes((actual) => actual - 1)
  }

  const changeHandler = (e) => {
    setValue(e.currentTarget.value)
  }


  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type='text' onChange={changeHandler} value={value} />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;