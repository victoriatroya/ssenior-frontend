import React, {ChangeEvent, useState} from 'react';

import Eye from "../../assets/images/eye.svg";
import HiddenEye from "../../assets/images/eye-hide.svg";

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
    validateText: string;
    idTest: string;
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
        validateText,
        idTest,
    }) => {

    const [showIconPassword, setShowIconPassword] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

    const handlePasswordToggle = () => {
        setShowIconPassword(prevState => !prevState);
    };

    return (
        <div className="input-container">
            <label className={labelClass}>{label}</label>
            <input
                name={name}
                type={type === 'password' && showIconPassword ? 'text' : type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className={classInput}
                data-testid={idTest}
            />

            {type === "password" && (
                <img
                    src={showIconPassword ? Eye : HiddenEye}
                    alt=""
                    width="20"
                    className="icon"
                    onClick={handlePasswordToggle}
                />
            )}
            <span className="text-validate">{validateText}</span>
        </div>
    );
};

export default Input;