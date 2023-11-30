import React, {FC, MouseEvent} from 'react';

interface ButtonProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    classButon?: string;
    text: string;
    textClass?: string;
}

const Button: FC<ButtonProps> = (
    {
        onClick,
        disabled,
        text,
        textClass,
        classButon
    }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={classButon}
            onClick={handleClick}
            disabled={disabled}
        >
            <span className={textClass}>{text}</span>
        </button>
    );
};

export default Button;