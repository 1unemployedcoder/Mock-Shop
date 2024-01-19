import React from 'react';
import cl from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={cl.mySelect} value={value} onChange={e => onChange(e.target.value)}>
            <option disabled>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;