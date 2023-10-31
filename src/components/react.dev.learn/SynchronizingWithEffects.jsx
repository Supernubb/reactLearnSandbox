import TaskWrapper from "../TaskWrapper";

export default function SynchronizingWithEffects() {
    // 1 задача
    const task1 = `useEffect(() => ref.current.focus(), [])`

    // 2 задача
    const task2 = `useEffect(() => {
    if (shouldFocus) {
    ref.current.focus();
    }
    }, [shouldFocus]);`

    // 3 задача
    const task3 = `const timerId = setInterval(onTick, 1000);
    return () => clearInterval(timerId);`

    // 4 задача
    const task4 = ` useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
    if (!ignore) {
    setBio(result);
    }
    });
    return () => {
    ignore = true;
    }
    }, [person]);`

    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}