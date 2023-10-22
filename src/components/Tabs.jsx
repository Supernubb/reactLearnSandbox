import { useState } from 'react'

import TicTacToeGame from './react.dev.learn/TicTacToeGame';
import KeepingComponentsPure from './react.dev.learn/KeepingComponentsPure';
import RenderingList from './react.dev.learn/RenderingLists';
import ThinkingInReact from './react.dev.learn/ThinkingInReact';
import ConditionalRendering from './react.dev.learn/ConditionalRendering';
import RespondingToEvents from './react.dev.learn/RespondingToEvents';
import StateAComponentsMemory from './react.dev.learn/StateAComponentsMemory';
import StateAsASnapshot from './react.dev.learn/StateAsASnapshot';
import QueueingASeriesOfStateUpdates from './react.dev.learn/QueueingASeriesOfStateUpdates';

const components = [
    {
        name: `TicTacToeGame`,
        component: <TicTacToeGame />,
    },
    {
        name: `ThinkingInReact(Table)`,
        component: <ThinkingInReact />,
    },
    {
        name: `ConditionalRendering`,
        component: <ConditionalRendering />,
    },
    {
        name: `RenderingList`,
        component: <RenderingList />,
    },
    {
        name: `KeepingComponentsPure`,
        component: <KeepingComponentsPure />,
    },
    {
        name: `RespondingToEvents`,
        component: <RespondingToEvents />,
    },
    {
        name: `StateAComponentsMemory`,
        component: <StateAComponentsMemory />,
    },
    {
        name: `StateAsASnapshot`,
        component: <StateAsASnapshot />,
    },
    {
        name: `QueueingASeriesOfStateUpdates`,
        component: <QueueingASeriesOfStateUpdates />,
    },
];

export default function Tabs() {
    const [curComponent, setCurComponent] = useState(components.length - 1);

    const tabList = components.map((component, i) =>
        <button key={i} onClick={() => setCurComponent(i)} className={`p-2 m-2 border ${i === curComponent ? ' border-green-500 font-bold' : ' border-red-500'}`} disabled={i === curComponent}>
            {component.name}
        </button>
    );

    return (
        <>
            <div className='bg-sky-300 m-2 p-2 border-4 border-yellow-400 rounded-xl'>
                <div>Все задачи можно найти на сайте <a href="https://react.dev/learn" className='text-blue-600'>https://react.dev/learn</a> по названию компонента</div>
                <div>Для добавления компонента опишите его в файле src\components\Tabs.jsx в массиве components указав name и импортировав сам компонент</div>
                <div>Для отрисовки задач добавляем в массив то что мы бы обычно return для каждой задачи и передаем в компонент src\components\TaskWrapper.jsx</div>
            </div>
            <div className='flex flex-wrap'>
                {tabList}
            </div>
            <div className="mx-2 mt-4">
                {components[curComponent].component}
            </div>
        </>
    )
}