import TaskWrapper from '../TaskWrapper';

export default function RespondingToEvents() {

    // 1 задача

    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }

    const task1 = <>
        <button onClick={handleClick} className='border border-black'>
            Toggle the lights
        </button>
    </>

    // 2 задача

    const task2 = `<button onClick={e => {
        e.stopPropagation();
        onChangeColor();
    }}></button>`;

    return <TaskWrapper tasks={[task1, task2]} />
}
