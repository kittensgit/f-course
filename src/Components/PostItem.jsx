import React from 'react'
import { MyButton } from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

export const PostItem = (props) => {

const router = useNavigate()

    return (
        <div className="post">
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btn'>
                <MyButton onClick={() => { router(`/posts/${props.post.id}`) }}>open</MyButton>
                <MyButton onClick={() => { props.remove(props.post) }}>delete</MyButton>
            </div>
        </div>
    )
}
