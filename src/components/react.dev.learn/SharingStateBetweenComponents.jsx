import { useState } from 'react';
import TaskWrapper from '../TaskWrapper';

export default function SharingStateBetweenComponents() {
    // 1 задача
    function Input({ label, onInput, textValue }) {
        return (
            <label>
                {label}
                {' '}
                <input
                    className='border border-black'
                    value={textValue}
                    onChange={onInput}
                />
            </label>
        );
    }

    function InputsTogether() {
        const [inputText, setInputText] = useState("");
        return <div className='flex flex-col'>
            <Input label="First input" onInput={e => setInputText(e.target.value)} textValue={inputText} />
            <Input label="Second input" onInput={e => setInputText(e.target.value)} textValue={inputText} />
        </div>
    }

    const task1 = <InputsTogether />

    // 2 задача
    function filterItems(items, query) {
        query = query.toLowerCase();
        return items.filter(item =>
            item.name.split(' ').some(word =>
                word.toLowerCase().startsWith(query)
            )
        );
    }

    const foods = [{
        id: 0,
        name: 'Sushi',
        description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
    }, {
        id: 1,
        name: 'Dal',
        description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
    }, {
        id: 2,
        name: 'Pierogi',
        description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
    }, {
        id: 3,
        name: 'Shish kebab',
        description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
    }, {
        id: 4,
        name: 'Dim sum',
        description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
    }];

    function FilterableList() {
        const [query, setQuery] = useState('');
        const results = filterItems(foods, query);

        function handleChange(e) {
            setQuery(e.target.value);
        }

        return (
            <>
                <SearchBar query={query} onChange={handleChange} />
                <hr />
                <List items={results} />
            </>
        );
    }

    function SearchBar({ query, onChange }) {
        return (
            <label>
                Search:{' '}
                <input
                    value={query}
                    className='border border-black'
                    onChange={onChange}
                />
            </label>
        );
    }

    function List({ items }) {
        return (
            <table>
                <tbody>
                    {items.map(food => (
                        <tr key={food.id}>
                            <td className='pr-3'>{food.name}</td>
                            <td>{food.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const task2 = <FilterableList />;

    return <TaskWrapper tasks={[task1, task2]} />
}
