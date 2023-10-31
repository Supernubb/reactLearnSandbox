import { useRef, useState } from "react";
import TaskWrapper from "../TaskWrapper";

export default function ManipulatingTheDomWithRefs() {
    // 1 задача
    const [isPlaying, setIsPlaying] = useState(false);
    const player = useRef(null);

    function handleClick() {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            player.current.pause();
        } else {
            player.current.play();
        }
    }

    const task1 = <>
        <button onClick={handleClick}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <video onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} ref={player} width="250">
            <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
            />
        </video>
    </>

    // 2 задача
    const searchFocus = useRef(null);

    const task2 = <>
        <nav>
            <button onClick={() => searchFocus.current.focus()}>Search</button>
        </nav>
        <input
            ref={searchFocus}
            placeholder="Looking for something?"
        />
    </>

    // 3 задача
    const task3 = `
    <img
    ref={index === i ? activeImgRef : null}

    <button onClick={() => {

    flushSync(() => {
    if (index < catList.length - 1) {
    setIndex(index + 1);
    } else {
    setIndex(0);
    }
    }) 


    activeImgRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
    });
    }}>
    Next
    </button>`
    // 4 задача
    const task4 = `
        export default forwardRef(
        function SearchInput(props, ref) {
        return (
        <input
        ref={ref}
        placeholder="Looking for something?"
        />
        );
        }
        );`

    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}
