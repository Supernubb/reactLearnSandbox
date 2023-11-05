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
import UpdatingObjectsInState from './react.dev.learn/UpdatingObjectsInState';
import UpdatingArraysInState from './react.dev.learn/UpdatingArraysInState';
import ReactingToInputWithState from './react.dev.learn/ReactingToInputWithState';
import PassingPropsToAComponent from './react.dev.learn/PassingPropsToAComponent';
import ChoosingTheStateStructure from './react.dev.learn/ChoosingTheStateStructure';
import SharingStateBetweenComponents from './react.dev.learn/SharingStateBetweenComponents';
import PreservingAndResettingState from './react.dev.learn/PreservingAndResettingState';
import ExtractingStateLogicIntoAReducer from './react.dev.learn/ExtractingStateLogicIntoAReducer';
import UltimateReactCourse from './ulbitv.reactcourse/UltimateReactCourse';
import PassingDataDeeplyWithContext from './react.dev.learn/PassingDataDeeplyWithContext';
import ReferencingValuesWithRefs from './react.dev.learn/ReferencingValuesWithRefs';
import ManipulatingTheDomWithRefs from './react.dev.learn/ManipulatingTheDomWithRefs';
import SynchronizingWithEffects from './react.dev.learn/SynchronizingWithEffects';
import YouMightNotNeedAnEffect from './react.dev.learn/YouMightNotNeedAnEffect';
import LifecycleOfReactiveEffects from './react.dev.learn/LifecycleOfReactiveEffects';
import SeparatingEventsFromEffects from './react.dev.learn/SeparatingEventsFromEffects';
import RemovingEffectDependencies from './react.dev.learn/RemovingEffectDependencies';
import ReusingLogicWithCustomHooks from './react.dev.learn/ReusingLogicWithCustomHooks';

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
        name: `PassingPropsToAComponent`,
        component: <PassingPropsToAComponent />,
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
    {
        name: `UpdatingObjectsInState`,
        component: <UpdatingObjectsInState />,
    },
    {
        name: `UpdatingArraysInState`,
        component: <UpdatingArraysInState />,
    },
    {
        name: `ReactingToInputWithState`,
        component: <ReactingToInputWithState />,
    },
    {
        name: `ChoosingTheStateStructure`,
        component: <ChoosingTheStateStructure />,
    },
    {
        name: `SharingStateBetweenComponents`,
        component: <SharingStateBetweenComponents />,
    },
    {
        name: `PreservingAndResettingState`,
        component: <PreservingAndResettingState />,
    },
    {
        name: `ExtractingStateLogicIntoAReducer`,
        component: <ExtractingStateLogicIntoAReducer />,
    },
    {
        name: `PassingDataDeeplyWithContext`,
        component: <PassingDataDeeplyWithContext />,
    },
    {
        name: `ReferencingValuesWithRefs`,
        component: <ReferencingValuesWithRefs />,
    },
    {
        name: `ManipulatingTheDomWithRefs`,
        component: <ManipulatingTheDomWithRefs />,
    },
    {
        name: `SynchronizingWithEffects`,
        component: <SynchronizingWithEffects />,
    },
    {
        name: `YouMightNotNeedAnEffect`,
        component: <YouMightNotNeedAnEffect />,
    },
    {
        name: `LifecycleOfReactiveEffects`,
        component: <LifecycleOfReactiveEffects />,
    },
    {
        name: `SeparatingEventsFromEffects`,
        component: <SeparatingEventsFromEffects />,
    },
    {
        name: `RemovingEffectDependencies`,
        component: <RemovingEffectDependencies />,
    },
    {
        name: `ReusingLogicWithCustomHooks`,
        component: <ReusingLogicWithCustomHooks />,
    },
    {
        name: `UlbiTV - UltimateReactCourse(YouTube)`,
        component: <UltimateReactCourse />,
    },
];

export default function Tabs() {
    const [curComponent, setCurComponent] = useState(components.length - 1);

    const tabList = components.map((component, i) =>
        <button key={i} onClick={() => setCurComponent(i)} className={`p-2 m-2 border ${i === curComponent ? ' border-green-500 font-bold' : ' border-black'}`} disabled={i === curComponent}>
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