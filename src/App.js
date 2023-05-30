import React, { useState } from "react";
import './styles/App.css';
import { PostList } from "./Components/PostList";
import { PostForm } from "./Components/PostForm";
import { MySelect } from "./Components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'v' },
    { id: 2, title: 'b', body: 'l' },
    { id: 3, title: 'c', body: 'k' }
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='sort'
          options={[
            { value: 'title', name: 'by name' },
            { value: 'body', name: 'by desc' }
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='post list' />
        : <h1 style={{ textAlign: 'center' }}>Not found post</h1>
      }
    </div>
  );
}

export default App;