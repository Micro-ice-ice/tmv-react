import React, { ChangeEvent } from 'react';
import {graphicsModes} from '../../models/graphicModes';

interface Option {
    value: string;
    name: string;
}

interface MySelectProps {
    options: Option[];
    defaultValue: string,
    onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ options, defaultValue, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as graphicsModes);
    };

    return (
        <select value={defaultValue} className="text-lg bg-gray-400 border-black border-2" onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value} >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default MySelect;
