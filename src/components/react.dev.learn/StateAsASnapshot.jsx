import { useState } from "react";
import TaskWrapper from "../TaskWrapper";


export default function StateAsASnapshot() {

    // 1 задача

    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        alert(walk ? `Stop is next` : `Walk is next`);
    }

    const task1 = <>
        <button onClick={handleClick}>
            Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
            color: walk ? 'darkgreen' : 'darkred'
        }}>
            {walk ? 'Walk' : 'Stop'}
        </h1>
    </>

    return <TaskWrapper tasks={[task1]} />
}
