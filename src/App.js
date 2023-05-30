import React, { useState, useRef } from "react";
import './styles/App.css';
import { PostList } from "./Components/PostList";
import { MyButton } from "./Components/UI/button/MyButton";
import { MyInput } from "./Components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'JS - it is programming language' },
    { id: 2, title: 'JS', body: 'JS - it is programming language' },
    { id: 3, title: 'JS', body: 'JS - it is programming language' }
  ])

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef('')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        {/* управляемый компонент */}
        <MyInput value={title} onChange={(e) => setTitle(e.currentTarget.value)} type='text' placeholder="desc post title" />
        {/* неуправляемый компонент */}
        <MyInput ref={bodyInputRef} type='text' placeholder="desc post" />
        <MyButton onClick={addNewPost} >create post</MyButton>
      </form>
      <PostList posts={posts} title='post list' />
    </div>
  );
}

export default App;