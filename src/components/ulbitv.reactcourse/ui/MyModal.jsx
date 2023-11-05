import React from 'react'

export default function MyModal({ children, showModal, setShowModal }) {


    return (
        <div onClick={() => { setShowModal(!showModal) }} className='fixed top-0 bottom-0 right-0 left-0 bg-black/50 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='p-6 bg-white rounded-2xl w-min'>
                {children}
            </div>
        </div>
    )
}
