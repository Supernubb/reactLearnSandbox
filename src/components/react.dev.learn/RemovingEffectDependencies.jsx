import TaskWrapper from "../TaskWrapper"

export default function RemovingEffectDependencies() {
  // 1 задача
  const task1 = `setCount(count => count + 1);`

  // 2 задача
  const task2 = `const onAppear = useEffectEvent(animation => {
  animation.start(duration);
  });

  useEffect(() => {
  const animation = new FadeInAnimation(ref.current);
  onAppear(animation);
  return () => {
  animation.stop();
  };
  }, []);`

  // 3 задача
  const task3 = `export default function ChatRoom({ roomId, serverUrl }) {
  useEffect(() => {
  const connection = createConnection({
  roomId: roomId,
  serverUrl: serverUrl
  });
  connection.connect();
  return () => connection.disconnect();
  }, [roomId, serverUrl]);`

  // 4 задача
  const task4 = ` <ChatRoom
  roomId={roomId}
  isEncrypted={isEncrypted}
  onMessage={msg => {
  showNotification('New message: ' + msg, isDark ? 'dark' : 'light');
  }}
  />



  import { useState, useEffect } from 'react';
  import { experimental_useEffectEvent as useEffectEvent } from 'react';
  import {
  createEncryptedConnection,
  createUnencryptedConnection,
  } from './chat.js';

  export default function ChatRoom({ roomId, isEncrypted, onMessage }) { // Reactive values
  const onReceiveMessage = useEffectEvent(onMessage); // Not reactive

  useEffect(() => {
  function createConnection() {
  const options = {
  serverUrl: 'https://localhost:1234',
  roomId: roomId // Reading a reactive value
  };
  if (isEncrypted) { // Reading a reactive value
  return createEncryptedConnection(options);
  } else {
  return createUnencryptedConnection(options);
  }
  }

  const connection = createConnection();
  connection.on('message', (msg) => onReceiveMessage(msg));
  connection.connect();
  return () => connection.disconnect();
  }, [roomId, isEncrypted]); // ✅ All dependencies declared`

  return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}
