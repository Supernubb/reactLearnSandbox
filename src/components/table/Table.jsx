import { useState } from "react";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
]

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState(``);
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className="w-80 border-2 border-gray-400 p-3">
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    )
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <div className="flex flex-col justify-evenly h-20 px-5 border-2 border-blue-400">
            <div>
                <input onChange={(e) => onFilterTextChange(e.target.value)} type="search" placeholder="Поиск..." value={filterText} className="border border-black h-5 outline-none w-full" />
            </div>
            <div>
                <input onChange={(e) => onInStockOnlyChange(e.target.checked)} type="checkbox" checked={inStockOnly} className="mr-3" id="inStockOnly" />
                <label htmlFor="inStockOnly">Только продукты в магазине</label>
            </div>
        </div>
    )
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            )
        }

        rows.push(
            <ProductRow product={product} key={product.name} />
        )

        lastCategory = product.category;
    })

    return (
        <div className="p-2 border-2 border-violet-700 mt-3">
            <div className="flex">
                <div className="font-bold flex-1">Имя</div>
                <div className="font-bold flex-1">Цена</div>
            </div>
            {rows}
        </div>
    )
}

function ProductCategoryRow({ category }) {
    return (
        <div className="flex font-bold justify-center border-2 border-emerald-700 mt-3">{category}</div>
    )
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <div className="text-red-500">{product.name}</div>
    return (
        <div className="flex border-2 border-orange-400 my-1">
            <div className="flex-1">{name}</div>
            <div className="flex-1">{product.price}</div>
        </div>
    )
}

export default function Learn() {
    return (
        <div className="mt-10 pt-10 border-t-2 border-t-pink-500">
            <FilterableProductTable products={PRODUCTS} />
        </div>
    )
}