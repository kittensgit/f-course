import React, { useState } from 'react'
import { MyButton } from "../Components/UI/button/MyButton";
import { MyInput } from "../Components/UI/input/MyInput";

export const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }


    return (
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
    )
}
