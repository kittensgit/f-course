import React, { useState } from "react";
import { Counter } from "./Counter";
import { ClassConter } from "./ClassCounter";

function App() {

  const [value, setValue] = useState('text')

  const changeHandler = (e) => {
    setValue(e.currentTarget.value)
  }


  return (
    <div className="App">
      <Counter />
      <ClassConter />
      <h1>{value}</h1>
      <input type='text' onChange={changeHandler} value={value} />
    </div>
  );
}

export default App;