import React, { useState } from "react";
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

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {
      ...post, id: Date.now()
    }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.currentTarget.value })}
          type='text'
          placeholder="desc post title" />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.currentTarget.value })}
          type='text'
          placeholder="desc post" />
        <MyButton onClick={addNewPost} >create post</MyButton>
      </form>
      <PostList posts={posts} title='post list' />
    </div>
  );
}

export default App;