import { useState } from "react";
import TaskWrapper from "../TaskWrapper";

export default function QueueingASeriesOfStateUpdates() {

    // 1 задача

    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(p => p + 1);
        await delay(1000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);
    }

    function delay(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }

    const task1 = <>
        <h3>
            Pending: {pending}
        </h3>
        <h3>
            Completed: {completed}
        </h3>
        <button onClick={handleClick}>
            Buy
        </button>
    </>

    // 2 задача

    function increment(n) {
        return n + 1;
    }
    increment.toString = () => 'n => n+1';

    function TestCase({
        baseState,
        queue,
        expected
    }) {
        const actual = getFinalState(baseState, queue);
        return (
            <>
                <p>Base state: <b>{baseState}</b></p>
                <p>Queue: <b>[{queue.join(', ')}]</b></p>
                <p>Expected result: <b>{expected}</b></p>
                <p style={{
                    color: actual === expected ?
                        'green' :
                        'red'
                }}>
                    Your result: <b>{actual}</b>
                    {' '}
                    ({actual === expected ?
                        'correct' :
                        'wrong'
                    })
                </p>
            </>
        );
    }

    function getFinalState(baseState, queue) {
        let finalState = baseState;

        for (let update of queue) {
            if (typeof update === 'function') {
                finalState = update(finalState);
            } else {
                finalState = update;
            }
        }

        return finalState;
    }

    const task2 = <>
        <TestCase
            baseState={0}
            queue={[1, 1, 1]}
            expected={1}
        />
        <hr />
        <TestCase
            baseState={1}
            queue={[
                increment,
                increment,
                increment
            ]}
            expected={4}
        />
        <hr />
        <TestCase
            baseState={1}
            queue={[
                5,
                increment,
            ]}
            expected={6}
        />
        <hr />
        <TestCase
            baseState={0}
            queue={[
                5,
                increment,
                42,
            ]}
            expected={42}
        />
    </>

    return <TaskWrapper tasks={[task1, task2]} />
}
