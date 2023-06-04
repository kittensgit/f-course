import React, { useEffect, useState, useRef } from "react";
import { PostList } from "../Components/PostList";
import { PostForm } from "../Components/PostForm";
import { PostFilter } from "../Components/PostFilter";
import { MyModal } from "../Components/UI/modal/MyModal";
import { MyButton } from "../Components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../Components/API/PostService";
import { Loader } from "../Components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { Pagination } from "../Components/UI/padination/Pagination";
import { useObserver } from "../hooks/useObserver";
import { MySelect } from "../Components/UI/select/MySelect";

function Posts() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)  //общее кол-во страниц
    const [limit, setLimit] = useState(10) // лимит постов
    const [page, setPage] = useState(1) //номер текущей страницы
    const lastElement = useRef()

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'] //общее кол-во постов
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => { //получаем пост из дочернего эл-та
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
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
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='count elements on page'
                options={[
                    {value: 5, 'name': '5'},
                    {value: 10, 'name': '10'},
                    {value: 25, 'name': '25'},
                    {value: -1, 'name': 'all'},
                ]}
            />
            {postError &&
                <h1>An error has occurred "{postError}"</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post list' />
            <div ref={lastElement} style={{ height: '20px', background: 'red' }}></div>
            {isPostsLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div>
    );
}

export default Posts;