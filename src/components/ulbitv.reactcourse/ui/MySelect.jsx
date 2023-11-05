import React from 'react'

export default function MySort({ options, defaultValue, value, onChange }) {
    return (
        <div className="m-2 py-2 border-t border-black">
            <select onChange={e => onChange(e.target.value)} value={value}>
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}
