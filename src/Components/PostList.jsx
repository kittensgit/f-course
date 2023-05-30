import React from 'react'
import { PostItem } from './PostItem'

export const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {posts.map((p, index) =>
                <PostItem remove={remove} number={index+1} post={p} key={p.id} />)
            }
        </div>
    )
}
