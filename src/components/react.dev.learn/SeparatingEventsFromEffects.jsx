import TaskWrapper from "../TaskWrapper";

export default function SeparatingEventsFromEffects() {
    // 1 задача
    const task1 = `useEffect(() => {
    const id = setInterval(() => {
    setCount(c => c + increment);
    }, 1000);
    return () => {
    clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [increment]);`

    // 2 задача
    const task2 = `const onTick = useEffectEvent(() => {
    setCount(c => c + increment);
    });

    useEffect(() => {
    const id = setInterval(() => {
    onTick();
    }, 1000);
    return () => {
    clearInterval(id);
    };
    }, []);`

    // 3 задача
    const task3 = `const onTick = useEffectEvent(() => {
    setCount(c => c + increment);
    });

    useEffect(() => {
    const id = setInterval(() => {
    onTick();
    }, delay);
    return () => {
    clearInterval(id);
    }
    }, [delay]);`

    // 4 задача
    const task4 = `const onConnected = useEffectEvent(connectedRoomId => {
    showNotification('Welcome to ' + connectedRoomId, theme);
    });

    useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    let ttId;
    connection.on('connected', () => {
    ttId = setTimeout(() => {
    onConnected(roomId);
    }, 2000);
    });
    connection.connect();
    return () => {
    clearInterval(ttId);
    connection.disconnect();
    }
    }, [roomId]);`

    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}
