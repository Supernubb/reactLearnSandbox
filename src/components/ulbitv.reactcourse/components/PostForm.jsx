import React, { useState } from 'react'
import MyInput from '../ui/MyInput'
import MyButton from '../ui/MyButton'

export default function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        create(newPost)
        setPost({ title: '', body: '' });
    }

    return (
        <form>
            <MyInput onChange={e => setPost({ ...post, title: e.target.value })} value={post.title} type="text" placeholder="Имя поста" />
            <MyInput onChange={e => setPost({ ...post, body: e.target.value })} value={post.body} type="text" placeholder="Описание поста" />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}
