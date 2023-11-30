import React, {ChangeEvent} from 'react';

import "./Input.scss";

interface TextInputProps {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: "text" | "number" | "password";
    classInput?: string;
    labelClass?: string;
    name: string;
    validateText: string
}

const Input: React.FC<TextInputProps> = (
    {
        name,
        value,
        placeholder,
        onChange,
        type,
        label,
        classInput,
        labelClass,
        validateText
    }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    return (
        <div className="input-container">
            <label className={labelClass}>{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className={classInput}
            />
            <span className="text-validate">{validateText}</span>
        </div>
    );
};

export default Input;