import { useState, useEffect, useMemo } from 'react';
import TaskWrapper from '../TaskWrapper';

// // 1 задача
// let nextId = 0;

// function createTodo(text, completed = false) {
//     return {
//         id: nextId++,
//         text,
//         completed
//     };
// }

// const initialTodos = [
//     createTodo('Get apples', true),
//     createTodo('Get oranges', true),
//     createTodo('Get carrots'),
// ];

// function NewTodo({ onAdd }) {
//     const [text, setText] = useState('');

//     function handleAddClick() {
//         setText('');
//         onAdd(createTodo(text));
//     }

//     return (
//         <>
//             <input value={text} onChange={e => setText(e.target.value)} />
//             <button onClick={handleAddClick}>
//                 Add
//             </button>
//         </>
//     );
// }

export default function YouMightNotNeedAnEffect() {
    // // 1 задача
    // const [todos, setTodos] = useState(initialTodos);
    // const [showActive, setShowActive] = useState(false);
    // const activeTodos = todos.filter(todo => !todo.completed);
    // const todoList = showActive ? activeTodos : todos;

    // const task1 = <>
    //     <label>
    //         <input
    //             type="checkbox"
    //             checked={showActive}
    //             onChange={e => setShowActive(e.target.checked)}
    //         />
    //         Show only active todos
    //     </label>
    //     <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
    //     <ul>
    //         {todoList.map(todo => (
    //             <li key={todo.id}>
    //                 {todo.completed ? <s>{todo.text}</s> : todo.text}
    //             </li>
    //         ))}
    //     </ul>
    //     <footer>
    //         {activeTodos.length} todos left
    //     </footer>
    // </>

    // // 2 задача
    // let nextId = 0;
    // let calls = 0;

    // function getVisibleTodos(todos, showActive) {
    //     console.log(`getVisibleTodos() was called ${++calls} times`);
    //     const activeTodos = todos.filter(todo => !todo.completed);
    //     const visibleTodos = showActive ? activeTodos : todos;
    //     return visibleTodos;
    // }

    // function createTodo(text, completed = false) {
    //     return {
    //         id: nextId++,
    //         text,
    //         completed
    //     };
    // }

    // const initialTodos = [
    //     createTodo('Get apples', true),
    //     createTodo('Get oranges', true),
    //     createTodo('Get carrots'),
    // ];

    // function TodoList() {
    //     const [todos, setTodos] = useState(initialTodos);
    //     const [showActive, setShowActive] = useState(false);
    //     const [text, setText] = useState('');

    //     const visibleTodos = useMemo(() => getVisibleTodos(todos, showActive), [todos, showActive]);

    //     function handleAddClick() {
    //         setText('');
    //         setTodos([...todos, createTodo(text)]);
    //     }

    //     return (
    //         <>
    //             <label>
    //                 <input
    //                     type="checkbox"
    //                     checked={showActive}
    //                     onChange={e => setShowActive(e.target.checked)}
    //                 />
    //                 Show only active todos
    //             </label>
    //             <input value={text} onChange={e => setText(e.target.value)} />
    //             <button onClick={handleAddClick}>
    //                 Add
    //             </button>
    //             <ul>
    //                 {visibleTodos.map(todo => (
    //                     <li key={todo.id}>
    //                         {todo.completed ? <s>{todo.text}</s> : todo.text}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </>
    //     );
    // }

    // 3 задача
    // там нужно key передать, разделив компонент на 2 части

    // 4 задача
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setShowForm(false);
    //     sendMessage(message);
    // }

    const task = <>все в коде в комментариях</>


    return <TaskWrapper tasks={[task]} />
}


