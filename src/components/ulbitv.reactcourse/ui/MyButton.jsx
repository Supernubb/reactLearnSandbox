import React from 'react'

export default function MyButton({ children, ...props }) {
    return (
        <button {...props} className='border border-green-400 px-2'>{children}</button>
    )
}
