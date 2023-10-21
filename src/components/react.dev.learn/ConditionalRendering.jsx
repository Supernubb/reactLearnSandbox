// 1 задача

import TaskWrapper from "../TaskWrapper";

function Item({ name, importance }) {
    return (
        <li className="item">
            {name}
            {importance > 0 && <span> (Importance: {importance})</span>}
        </li>
    );
}

const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15–70 mg/cup',
        age: '4,000+ years',
    },
    coffee: {
        part: 'bean',
        caffeine: '80–185 mg/cup',
        age: '1,000+ years',
    },
};

const task1 = <>
    <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item
                importance={9}
                name="Space suit"
            />
            <Item
                importance={0}
                name="Helmet with a golden leaf"
            />
            <Item
                importance={6}
                name="Photo of Tam"
            />
        </ul>
    </section>
</>

// 2 задача

function Drink({ name }) {
    const curDrink = drinks[name];
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{curDrink.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{curDrink.caffeine}</dd>
                <dt>Age</dt>
                <dd>{curDrink.age}</dd>
            </dl>
        </section>
    );
}

const task2 = <>
    <Drink name="tea" />
    <Drink name="coffee" />
</>

export default function ConditionalRendering() {
    return <TaskWrapper tasks={[task1, task2]} />
}
