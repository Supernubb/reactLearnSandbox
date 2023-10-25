import { useState } from "react";
import TaskWrapper from "../TaskWrapper";
// 2 задача данные
const initialItems = [
    { id: 2, title: 'Warm socks', packed: true },
    { id: 3, title: 'Travel journal', packed: false },
    { id: 4, title: 'Watercolors', packed: false },
];

export default function ChoosingTheStateStructure() {
    // 1 задача
    const task1 = "const color = props.color;";

    // 2 задача
    const [products, setProducts] = useState(initialItems);
    const [newProduct, setNewProduct] = useState("");

    // const newProducts = products.map((product, i) => ({ ...product, id: i }));
    // setProducts(newProducts);

    function onChecked(productId) {
        const newProducts = products.map(product => product.id === productId ? { ...product, packed: !product.packed } : product);
        setProducts(newProducts);
    }

    function onDelete(productId) {
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
    }

    function onAdd() {
        const newProducts = [...products, { id: products.length, title: newProduct, packed: false }]
        setProducts(newProducts);
    }

    const task2 =
        <div className="flex flex-col">
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

    return <TaskWrapper tasks={[task1, task2]} />
}
