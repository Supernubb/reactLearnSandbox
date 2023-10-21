import { useState } from 'react'

import TicTacToeGame from './react.dev.learn/TicTacToeGame';
import KeepingComponentsPure from './react.dev.learn/KeepingComponentsPure';
import RenderingList from './react.dev.learn/RenderingLists';
import ThinkingInReact from './react.dev.learn/ThinkingInReact';
import ConditionalRendering from './react.dev.learn/ConditionalRendering';
import RespondingToEvents from './react.dev.learn/RespondingToEvents';
import StateAComponentsMemory from './react.dev.learn/StateAComponentsMemory';

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
];

export default function Tabs() {
    const [showTab, setShowTab] = useState([...Array(components.length - 1).fill(false), true]);
    const [curComponent, setCurComponent] = useState(components.length - 1);

    function onTabClick(id) {
        const newShowTab = showTab.slice();
        newShowTab[curComponent] = false;
        newShowTab[id] = true;
        setShowTab(newShowTab);
        setCurComponent(id);
    }

    const tabList = components.map((component, i) =>
        <button key={i} onClick={() => onTabClick(i)} className={`p-2 m-2 border ${showTab[i] ? ' border-green-500 font-bold' : ' border-red-500'}`} disabled={i === curComponent}>
            {component.name}
        </button>
    );

    return (
        <>
            <div className='flex flex-wrap'>
                {tabList}
            </div>
            <div className="ml-2 mt-4">
                {components[curComponent].component}
            </div>
        </>
    )
}