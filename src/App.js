import React, { useState } from "react";
import './styles/App.css';
import { PostList } from "./Components/PostList";

function App() {

  const [posts1, setPosts1] = useState([
    { id: 1, title: 'JS', body: 'JS - it is programming language' },
    { id: 2, title: 'JS', body: 'JS - it is programming language' },
    { id: 3, title: 'JS', body: 'JS - it is programming language' }
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'python', body: 'python - it is programming language' },
    { id: 2, title: 'python', body: 'python - it is programming language' },
    { id: 3, title: 'python', body: 'python - it is programming language' }
  ])

  return (
    <div className="App">
      <PostList posts={posts1} title='post list js' />
      <PostList posts={posts2} title='post list python' />
    </div>
  );
}

export default App;