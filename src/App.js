import React from "react";
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <div className="post">
        <div className='post__content'>
          <strong>1. JS</strong>
          <div>
            JS - it is programming language
          </div>
        </div>
        <div classname='post__btn'>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;