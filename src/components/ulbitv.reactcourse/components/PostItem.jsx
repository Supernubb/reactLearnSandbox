import React from 'react'
import MyButton from '../ui/MyButton'

export default function PostItem(props) {
    return (
        <div className='flex items-center justify-between my-2 p-2 border-2 border-green-600'>
            <div>
                <div className='font-bold'>{props.post.id}. {props.post.title}</div>
                <div>{props.post.body}</div>
            </div>
            <div>
                <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
            </div>
        </div>
    )
}
