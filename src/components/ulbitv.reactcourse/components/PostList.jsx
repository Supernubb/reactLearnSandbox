import React from 'react'
import PostItem from './PostItem';

export default function PostList({ posts, title, remove }) {
    if (posts.length !== 0) {
        return <>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {posts.map((post, index) => <PostItem remove={remove} number={index + 1} key={post.id} post={post} />)}
        </>
    }
    return <h1 style={{ textAlign: "center" }}>Нет постов!</h1>
}
