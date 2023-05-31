import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/App.css';
import { PostList } from "./Components/PostList";
import { PostForm } from "./Components/PostForm";
import { PostFilter } from "./Components/PostFilter";
import { MyModal } from "./Components/UI/modal/MyModal";
import { MyButton } from "./Components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./Components/API/PostService";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'v' },
    { id: 2, title: 'b', body: 'l' },
    { id: 3, title: 'c', body: 'k' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts)
  }

  const removePost = (post) => { //получаем пост из дочернего эл-та
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
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