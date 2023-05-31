import React, { useState, useMemo } from "react";
import './styles/App.css';
import { PostList } from "./Components/PostList";
import { PostForm } from "./Components/PostForm";
import { PostFilter } from "./Components/PostFilter";
import { MyModal } from "./Components/UI/modal/MyModal";
import { MyButton } from "./Components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'v' },
    { id: 2, title: 'b', body: 'l' },
    { id: 3, title: 'c', body: 'k' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post list' />
    </div>
  );
}

export default App;