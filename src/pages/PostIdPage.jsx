import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../Components/API/PostService'
import { Loader } from '../Components/UI/loader/Loader'

export const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id) // сервер возвращает нам пост
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentByPostIdPage(id) 
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1> You open post page with id: {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm => 
                        <div key={comm.id} style={{ marginTop: '15px' }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
