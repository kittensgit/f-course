import React from 'react'
import { PostItem } from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}>Not found post</h1>
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
                {posts.map((p, index) =>
                    <CSSTransition
                    key={p.id}
                    timeout={500}
                    classNames='post'
                    >
                        <PostItem remove={remove} number={index + 1} post={p} />
                    </CSSTransition>
                )
                }
            </TransitionGroup>
        </div>
    )
}
