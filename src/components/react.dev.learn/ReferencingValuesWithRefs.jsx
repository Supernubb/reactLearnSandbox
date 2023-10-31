import { useRef, useState } from 'react';
import TaskWrapper from '../TaskWrapper';

export default function ReferencingValuesWithRefs() {
    // 1 задача
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    let timeoutID = useRef(null);

    function handleSend() {
        setIsSending(true);
        timeoutID.current = setTimeout(() => {
            alert('Sent!');
            setIsSending(false);
        }, 3000);
    }

    function handleUndo() {
        setIsSending(false);
        console.log(timeoutID);
        clearTimeout(timeoutID.current);
    }

    const task1 = <>
        <input
            className='border border-black'
            disabled={isSending}
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button
            className='border border-black'
            disabled={isSending}
            onClick={handleSend}>
            {isSending ? 'Sending...' : 'Send'}
        </button>
        {isSending &&
            <button className='border border-black' onClick={handleUndo}>
                Undo
            </button>
        }
    </>

    // 2 задача
    const [isOn, setIsOn] = useState(false)

    const task2 = <button className='border border-black' onClick={() => setIsOn(!isOn)}>
        {isOn ? 'On' : 'Off'}
    </button>

    // 3 задача
    function DebouncedButton({ onClick, children }) {
        let timeoutID = useRef(null);

        return (
            <button onClick={() => {
                clearTimeout(timeoutID.current);
                timeoutID.current = setTimeout(() => {
                    onClick();
                }, 1000);
            }}>
                {children}
            </button>
        );
    }

    const task3 = <>
        <DebouncedButton
            onClick={() => alert('Spaceship launched!')}
        >
            Launch the spaceship
        </DebouncedButton>
        <DebouncedButton
            onClick={() => alert('Soup boiled!')}
        >
            Boil the soup
        </DebouncedButton>
        <DebouncedButton
            onClick={() => alert('Lullaby sung!')}
        >
            Sing a lullaby
        </DebouncedButton>
    </>

    // 4 задача

    function Chat() {
        const [text, setText] = useState('');
        const textRef = useRef(null);
        textRef.current = text;

        function handleSend() {
            setTimeout(() => {
                alert('Sending: ' + textRef.current);
            }, 3000);
        }

        return (
            <>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button
                    onClick={handleSend}>
                    Send
                </button>
            </>
        );
    }

    const task4 = <Chat />;

    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}
