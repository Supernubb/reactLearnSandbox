import { Fragment } from 'react'
import TaskWrapper from '../TaskWrapper';

// 1 задача

const task1 = <>Я не написал код</>;

// 2 задача

const task2 = <>Я не написал код</>;

// 3 задача

const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function Recipe({ id, name, ingredients }) {
    return (
        <>
            <h1 className='font-bold text-xl'>{name}</h1>
            {ingredients.map((ingredient, i) =>
                <div key={i}>{i + 1}. {ingredient}</div>
            )}
        </>
    )
}

const task3 = <>
    <h1 className='font-bold text-xl text-amber-400'>Recipes</h1>
    {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
    )}
</>

// 4 задача

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

const task4 = <>
    {poem.lines.map((line, i) => (
        <Fragment key={i}>
            <p>{line}</p>
            {i === poem.lines.length - 1 ? "" : <hr />}
        </Fragment>
    ))}
</>

export default function RenderingList() {
    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}