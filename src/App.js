import React, { useState } from "react";

function App() {

  const [likes, setLikes] = useState(0)

  const increment = () => {
    setLikes((actual) => actual + 1)
  }

  const decrement = () => {
    setLikes((actual) => actual - 1)
  }


  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
