import React, { useState } from "react";
import './styles/App.css';
import { PostList } from "./Components/PostList";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'JS - it is programming language' },
    { id: 2, title: 'JS', body: 'JS - it is programming language' },
    { id: 3, title: 'JS', body: 'JS - it is programming language' }
  ])

  return (
    <div className="App">
      <form>
        <input type='text' placeholder="desc post title" />
        <input type='text' placeholder="desc post" />
        <button>create post</button>
      </form>
      <PostList posts={posts} title='post list'/>
    </div>
  );
}

export default App;