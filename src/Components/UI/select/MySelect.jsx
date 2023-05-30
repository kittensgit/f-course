import React from 'react'

export const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (

        <select
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.key} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>

    )
}
