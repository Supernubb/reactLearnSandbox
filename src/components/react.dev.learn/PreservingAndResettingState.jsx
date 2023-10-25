import { useState } from 'react';
import TaskWrapper from '../TaskWrapper';

export default function PreservingAndResettingState() {
    // 1 задача
    const [showHint, setShowHint] = useState(false);
    const task1 = <div className='flex flex-col items-start'>
        {showHint && <p><i>Hint: Your favorite city?</i></p>}
        <Form />
        <button className='border border-black mt-2' onClick={() => { setShowHint(!showHint) }}>
            {showHint ? 'Show' : 'Hide'} hint
        </button>
    </div>

    // 2 задача
    const [inputsOrder, setInputsOrder] = useState(true);

    function InputName({ label }) {
        const [text, setText] = useState("");

        return <div className='flex flex-row my-2'>
            {label}
            <input value={text} onChange={e => setText(e.target.value)} type="text" className='border border-black ml-3' />
        </div>
    }

    function InputsList(params) {
        return <div className='flex flex-col'>
            {/* {inputsOrder ?
                ( < InputName label={`Last name`} />
            <InputName label={`First name`} />)
                :
                ( < InputName label={`Last name`} />
            <InputName label={`First name`} />)
            } */}
            {inputsOrder ? < InputName label={`Last name`} /> : <InputName label={`First name`} />}
            <div className='flex flex-row'>
                <input type="checkbox" />
                Reverse order
            </div>
        </div>
    }

    const task2 = <InputsList />

    return <TaskWrapper tasks={[task1, task2]} />
}

function Form() {
    const [text, setText] = useState('');
    return (
        <textarea
            className='border border-black'
            value={text}
            onChange={e => setText(e.target.value)}
        />
    );
}
