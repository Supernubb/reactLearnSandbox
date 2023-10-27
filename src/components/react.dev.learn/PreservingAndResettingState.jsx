import { Fragment, useState } from 'react';
import TaskWrapper from '../TaskWrapper';

// 1 задача
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

    function InputName({ label }) {
        const [text, setText] = useState("");

        return <div className='flex flex-row my-2'>
            {label}
            <input value={text} onChange={e => setText(e.target.value)} type="text" className='border border-black ml-3' />
        </div>
    }

    function InputsList() {
        const [inputsOrder, setInputsOrder] = useState(true);

        return (
            <div className='flex flex-col'>
                {inputsOrder ?
                    <Fragment>
                        <InputName key={`firstName`} label={`First name`} />
                        < InputName key={`lastName`} label={`Last name`} />
                    </Fragment>
                    :
                    <Fragment>
                        < InputName key={`lastName`} label={`Last name`} />
                        <InputName key={`firstName`} label={`First name`} />
                    </Fragment>
                }
                <label className='flex flex-row'>
                    <input checked={!inputsOrder} type="checkbox" onChange={e => setInputsOrder(!inputsOrder)} />
                    Reverse order
                </label>
            </div>
        )
    }

    const task2 = <InputsList />

    // 3 задача

    const task3 = `<EditContact
    key={selectedId}
    initialData={selectedContact}
    onSave={handleSave}
    />`

    // 4 задача
    const task4 = `<img key={index} src={image.src} />`

    // 5 задача
    const task5 = ` <li key={contact.email}>
    <Contact contact={contact} />
  </li>`

    return <TaskWrapper tasks={[task1, task2, task3, task4, task5]} />
}


