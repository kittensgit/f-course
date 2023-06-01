import React, { useEffect, useState } from "react";
import './styles/App.css';
import { PostList } from "./Components/PostList";
import { PostForm } from "./Components/PostForm";
import { PostFilter } from "./Components/PostFilter";
import { MyModal } from "./Components/UI/modal/MyModal";
import { MyButton } from "./Components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./Components/API/PostService";
import { Loader } from "./Components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)  //общее кол-во страниц
  const [limit, setLimit] = useState(10) // лимит постов
  const [page, setPage] = useState(1) //номер текущей страницы

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'] //общее кол-во постов
    setTotalPages(getPageCount(totalCount, limit))
  })

  let pagesArray = getPagesArray(totalPages) //в массиве лежат числа от 1 до 10

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => { //получаем пост из дочернего эл-та
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts()
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
      {postError &&
        <h1>An error has occurred "{postError}"</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post list' />
      }
      <div className="page__wrapper">
        {pagesArray.map(p =>
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}
          >
            {p}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;