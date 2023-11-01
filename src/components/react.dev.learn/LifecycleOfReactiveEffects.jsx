import TaskWrapper from "../TaskWrapper";

export default function LifecycleOfReactiveEffects() {
    // 1 задача
    const task1 = `useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
    }, [roomId]);`

    // 2 задача
    const task2 = `useEffect(() => {
    function handleMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
    }
    if (canMove) {
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
    }
    }, [canMove]);`

    // 3 задача
    const task3 = `useEffect(() => {
    function handleMove(e) {
    if (canMove) {
    setPosition({ x: e.clientX, y: e.clientY });
    }
    }

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
    }, [canMove]);`

    // 4 задача
    const task4 = `<ChatRoom
    roomId={roomId}
    isEncrypted={isEncrypted}
    />

    import {
    createEncryptedConnection,
    createUnencryptedConnection,
    } from './chat.js';

    export default function ChatRoom({ roomId, isEncrypted }) {
    useEffect(() => {
    const createConnection = isEncrypted ?
    createEncryptedConnection :
    createUnencryptedConnection;
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    }, [roomId, isEncrypted]);`

    // 5 задача
    const task5 = `useEffect(() => {
    if (planetId === '') {
    // Nothing is selected in the first box yet
    return;
    }

    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then(result => {
    if (!ignore) {
    console.log('Fetched a list of places on "' + planetId + '".');
    setPlaceList(result);
    setPlaceId(result[0].id); // Select the first place
    }
    });
    return () => {
    ignore = true;
    }
    }, [planetId]);`

    return <TaskWrapper tasks={[task1, task2, task3, task4, task5]} />
}
