import TaskWrapper from "../TaskWrapper"

export default function ReusingLogicWithCustomHooks() {
    // 1 задача
    const task1 = `код переносим туда сюда, импортируем экспортируем и return count;`

    // 2 задача
    const task2 = `все изи просто прокидываем и заменяем харкод на delay`

    // 3 задача
    const task3 = `import { useState } from 'react';
    import { useInterval } from './useInterval';

    export function useCounter(delay) {
    const [count, setCount] = useState(0);
    useInterval(() => {
    setCount(c => c + 1);
    }, delay);
    return count;
    }

    import {useEffect} from 'react';

    export function useInterval(onTick, delay) {
    useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
    }, [delay, onTick]);
    }`

    // 4 задача
    const task4 = `export function useInterval(callback, delay) {
    const onTick = useEffectEvent(callback);
    useEffect(() => {
    const id = setInterval(onTick, delay);
    return () => clearInterval(id);
    }, [delay]);
    }`

    // 5 задача
    const task5 = `function useDelayedValue(value, delay) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
    setTimeout(() => {
    setDelayedValue(value);
    }, delay);
    }, [value, delay]);

    return delayedValue;
    }`

    return <TaskWrapper tasks={[task1, task2, task3, task4, task5]} />
}
