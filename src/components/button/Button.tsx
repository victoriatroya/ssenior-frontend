import React, {FC, MouseEvent} from 'react';

interface ButtonProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    classButon?: string;
    text: string;
    textClass?: string;
}

const Button: FC<ButtonProps> = (
    {
        onClick,
        className,
        disabled,
        text,
        textClass
    }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={className}
            onClick={handleClick}
            disabled={disabled}
        >
            <span className={textClass}>{text}</span>
        </button>
    );
};

export default Button;