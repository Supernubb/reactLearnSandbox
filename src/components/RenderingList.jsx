import React, { Fragment } from 'react'

//////////////////////////////////////////////////////////////////////////////// 3 задача
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
//////////////////////////////////////////////////////////////////////////////// 4 задача
const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export default function RenderingList() {
    return (
        <>
            {/* //////////////////////////////////////////////////////////////////////////////// 3 задача */}
            <div>
                <h1 className='font-bold text-xl text-amber-400'>Recipes</h1>
                {recipes.map(recipe =>
                    <Recipe {...recipe} key={recipe.id} />
                )}
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////// 4 задача */}
            <article>
                {poem.lines.map((line, i) => (
                    <Fragment key={i}>
                        <p>{line}</p>
                        <hr />
                    </Fragment>
                ))}
            </article>
        </>
    )
}