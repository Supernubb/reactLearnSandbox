import { useState } from 'react';
import TaskWrapper from '../TaskWrapper';

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

export default function UpdatingArraysInState() {
    const [products, setProducts] = useState(initialProducts)

    // 1 задача
    function handleIncreaseClick(productId) {
        setProducts(products.map(product => product.id === productId ? { ...product, count: product.count + 1 } : { ...product }));
    }

    // 2 задача
    function handleDecreaseClick(productId) {
        setProducts(products.map(product => product.id === productId ? { ...product, count: product.count - 1 } : { ...product }).filter(p => p.count > 0));
    }

    const task12 = <ul>
        {products.map(product => (
            <li key={product.id}>
                {product.name}
                {' '}
                (<b>{product.count}</b>)
                <button className='border border-black m-2 p-2' onClick={() => handleIncreaseClick(product.id)}>+</button>
                <button className='border border-black m-2 p-2' onClick={() => handleDecreaseClick(product.id)}>-</button>
            </li>
        ))}
    </ul>

    // 3 задача
    const task3 = <>
        {`function handleAddTodo(title) {
        setTodos([...todos, {
          id: nextId++,
          title: title,
          done: false
        }])}`}
        <br />
        {`function handleChangeTodo(nextTodo) {
        setTodos(todos.map(todo => {
            if (todo.id === nextTodo.id) {
                return { ...todo, title: nextTodo.title };
            } else {
                return { ...todo };
            }
        }))}`}
        <br />
        {`function handleDeleteTodo(todoId) {
        setTodos(todos.filter(todo => todo.id !== todoId))}`}
    </>

    // 4 задача
    const task4 = <>Задача на Draft, по коду меньше не стало, не вижу смысла пока что его брать в изучение</>

    return <TaskWrapper tasks={[<>1 задача находится во второй</>, task12, task3, task4]} />
}