import React from "react";
import './styles/App.css'
import { PostItem } from "./Components/PostItem";

function App() {

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'JS', body: 'JS - it is programming language' }} />
    </div>
  );
}

export default App;