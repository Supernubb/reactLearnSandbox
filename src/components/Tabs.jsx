import React, { useState } from 'react'

import Game from './Game';
import KeepingComponentsPure from './KeepingComponentsPure';
import RenderingList from './RenderingList';
import Table from './Table';

const components = [
    {
        name: `Game`,
        component: <Game />,
    },
    {
        name: `Table`,
        component: <Table />,
    },
    {
        name: `RenderingList`,
        component: <RenderingList />,
    },
    {
        name: `KeepingComponentsPure`,
        component: <KeepingComponentsPure />,
    },
];

export default function Tabs() {
    const [tabHidden, settabHidden] = useState([...Array(components.length - 1).fill(true), false]);

    function tabClick(id) {
        const newShowTab = Array(components.length).fill(true);
        newShowTab[id] = false;
        settabHidden(newShowTab);
    }

    const tabList = components.map(({ name, component }, i) => {
        return (
            <div key={i} onClick={() => tabClick(i)} className={tabHidden[i] ? 'p-2 m-2 border border-red-500 cursor-pointer' : 'p-2 m-2 border border-green-500 font-bold'}>{name}</div>
        )
    });


    const componentsList = components.map(({ name, component }, i) => {
        return (
            <div key={i} className={tabHidden[i] ? `hidden ml-2 mt-4` : `ml-2 mt-4`}>
                {component}
            </div>
        )
    });

    return (
        <>
            <div className='flex flex-wrap'>
                {tabList}
            </div>
            {componentsList}
        </>
    )
}
