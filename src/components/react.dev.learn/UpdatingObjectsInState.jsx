import { useState } from 'react';
import TaskWrapper from '../TaskWrapper';

export default function UpdatingObjectsInState() {

    // 1 задача

    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        setPlayer({
            ...player,
            score: player.score + 1,
        });
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            ...player,
            lastName: e.target.value
        });
    }

    const task1 = <>
        <label>
            Score: <b>{player.score}</b>
            {' '}
            <button onClick={handlePlusClick} className='border border-black'>
                +1
            </button>
        </label>
        <label>
            First name:
            <input
                className='border border-black'
                value={player.firstName}
                onChange={handleFirstNameChange}
            />
        </label>
        <label>
            Last name:
            <input
                className='border border-black'
                value={player.lastName}
                onChange={handleLastNameChange}
            />
        </label>
    </>

    // 2 задача

    const task2 =
        `function handleMove(dx, dy) {
        setShape({
            ...shape,
            position: {
                x: shape.position.x + dx,
                y: shape.position.y + dy,
            }
        });
    }`

    // 3 задача

    const task3 =
        `useState заменить на useImmer
        
        function handleMove(dx, dy) {
            setShape(o => {
                o.position.x += dx;
                o.position.y += dy;
        });
    }`

    return <TaskWrapper tasks={[task1, task2, task3]} />
}
