import { useState } from "react";

const initialTodos = [
    { id: 0, header: 'Wake up', body: 'Need Wake up', completed: true },
    { id: 1, header: 'Clean teef', body: 'Need Clean teef', completed: false },
    { id: 2, header: 'Eat breakfast', body: 'Need Eat breakfast', completed: false },
]

export default function UltimateReactCourse() {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState({ header: '', body: '' });

    function setCompletedTodos(todoId) {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    }

    function addTodo() {
        setTodos([...todos, { id: new Date().getTime(), header: newTodo.header, body: newTodo.body, completed: false }]);
        setNewTodo({ header: '', body: '' });
    }

    function deleteTodo(todoId) {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    function setEditTodo(todoId) {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, edit: !todo.edit } : todo));
    }

    const todosList = todos.map((todo, i) =>
        <div className={`flex border p-2 my-2 ${todo.completed ? 'border-red-500' : 'border-black'}`} key={i}>
            <div className="basis-1/12 mr-2">{i + 1}</div>
            {todo.edit ?
                <input onChange={e => setTodos(todos.map(t => t.id === todo.id ? { ...t, header: e.target.value } : t))} className="basis-4/12 mr-2 border border-black" value={todo.header} type="text" />
                :
                <div className="basis-4/12 mr-2">{todo.header}</div>}
            {todo.edit ?
                <input onChange={e => setTodos(todos.map(t => t.id === todo.id ? { ...t, body: e.target.value } : t))} className="basis-4/12 mr-2 border border-black mx-auto" value={todo.body} type="text" />
                :
                <div className="basis-4/12 mr-2">{todo.body}</div>}
            <input className="mr-2 basis-1/12" type="checkbox" checked={todo.completed} onChange={() => setCompletedTodos(todo.id)} />
            <button onClick={() => setEditTodo(todo.id)} className="basis-1/12 border border-black mr-2">{todo.edit ? `Save` : `Edit`}</button>
            <button onClick={() => deleteTodo(todo.id)} className="basis-1/12 border border-black">Delete</button>
        </div>
    )

    return (
        <>
            <div className="font-bold">Классический toDo list</div>
            <div>
                <input value={newTodo.header} onChange={e => setNewTodo({ ...newTodo, header: e.target.value })} className="border border-black mr-2" type="text" />
                <input value={newTodo.body} onChange={e => setNewTodo({ ...newTodo, body: e.target.value })} className="border border-black mr-2" type="text" />
                <button onClick={addTodo} className="border border-black">Add</button>
            </div>
            {todosList}
        </>
    )
}
