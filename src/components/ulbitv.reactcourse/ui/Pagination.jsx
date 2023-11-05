import React from 'react'
import MyButton from './MyButton'
import { getPagesArray } from '../utils/pages';

export default function Pagination({ totalPages, page, changePage }) {
    let pagesArray = getPagesArray(totalPages);

    return <div className="flex">
        {pagesArray.map(p =>
            <div key={p} className={`mr-2 ${p === page ? 'border-2 border-green-500' : undefined}`}>
                <MyButton onClick={() => changePage(p)}>{p}</MyButton>
            </div>
        )}
    </div>
}
