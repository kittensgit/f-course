import React from 'react'

export const PostItem = (props) => {
    return (
        <div className="post">
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btn'>
                <button>delete</button>
            </div>
        </div>
    )
}
