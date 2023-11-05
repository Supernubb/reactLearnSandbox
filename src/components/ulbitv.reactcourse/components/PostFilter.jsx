import React from 'react'
import MyInput from '../ui/MyInput'
import MySelect from '../ui/MySelect'

export default function PostFilter({ filter, setFilter }) {
    return (
        <>
            <MyInput onChange={e => setFilter({ ...filter, query: e.target.value })} value={filter.query} placeholder="Поиск" type="search" />
            <MySelect
                defaultValue='Сортировка по'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            />
        </>
    )
}
