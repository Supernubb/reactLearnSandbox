import { Fragment } from 'react'

export default function TaskWrapper({ tasks }) {
    return tasks.map((task, i) => {
        return (
            <Fragment key={i}>
                <div className='text-red-600 text-xl font-bold underline'>{i + 1} задача</div>
                {task}
            </Fragment>
        )
    })
}
