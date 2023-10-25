import { useState } from "react";
import TaskWrapper from "../TaskWrapper";
// 2 задача данные
const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

let startItemsId = initialItems[initialItems.length - 1].id + 1;

// 4 задача данные
const letters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
}, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
}, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
}];


export default function ChoosingTheStateStructure() {
    // 1 задача
    const task1 = "const color = props.color;";

    // 2 задача
    const [products, setProducts] = useState(initialItems);
    const [newProduct, setNewProduct] = useState("");

    function onChecked(productId) {
        const newProducts = products.map(product => product.id === productId ? { ...product, packed: !product.packed } : product);
        setProducts(newProducts);
    }

    function onDelete(productId) {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
    }

    function onAdd() {
        const newProducts = [...products, { id: startItemsId++, title: newProduct, packed: false }]
        setProducts(newProducts);
    }

    const task2 =
        <div className="flex flex-col">
            <div>Сделал задачу сам с нуля, смысл решения - удалить лишние стейты и рассчитывать нужные данные на основании одного стейта с элементами</div>
            <div className="flex flex-row">
                <input value={newProduct} onChange={e => setNewProduct(e.target.value)} className="border border-black" type="text" placeholder="Add item" />
                <button onClick={onAdd} className="ml-2 border border-black">Add</button>
            </div>
            <div className="flex flex-col">
                {products.map((product, i) =>
                    <div key={i} className="flex flex-row">
                        <input type="checkbox" onChange={() => onChecked(product.id)} checked={product.packed} />
                        <div className="mx-2">{product.title}</div>
                        <button onClick={() => onDelete(product.id)} className="border border-black">Delete</button>
                    </div>
                )}
            </div>
            <div className="border-t border-black">{products.filter(product => product.packed).length} out of {products.length} packed!</div>
        </div>

    // 3 задача
    const task3 = <>Т.к. мы храним в highlightedLetter объект письма то при изменении letters на кнопку этот объект не меняется и letter === highlightedLetter выдает false, по этому подсветка пропадает. Нужно хранить id письма, а не само письмо и делать проверку letter.id === highlightedId </>

    // 4 задача
    const [starLetters, setStarLetters] = useState(letters);

    const lettersStarred = starLetters.filter(letter => letter.isStarred === true).length;

    function onChangeLetter(letterId) {
        setStarLetters(starLetters.map(letter => letter.id === letterId ? { ...letter, isStarred: !letter.isStarred } : letter))
    }

    const task4 =
        <div className="flex flex-col">
            <div>Сделал сам, решение на сайте какое то мутное, хотя там держатся выбранные письма в коллекции Set через id письма, это производительнее, а у меня по сути два лишних прохода по массиву писем</div>
            <div className="font-bold text-2xl">Inbox</div>
            {starLetters.map((letter, i) =>
                <div key={i} className={letter.isStarred ? "bg-blue-300" : undefined}>
                    <label>
                        <input onChange={() => onChangeLetter(letter.id)} checked={letter.isStarred} type="checkbox" className="mr-2" />
                        {letter.subject}
                    </label>
                </div>
            )}
            <div className="border-t border-black mt-2 pt-2">You selected {lettersStarred} letters</div>
        </div>

    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}
