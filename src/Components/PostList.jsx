import React from 'react'
import { PostItem } from './PostItem'

export const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {posts.map(p =>
                <PostItem post={p} key={p.id} />)
            }
        </div>
    )
}
