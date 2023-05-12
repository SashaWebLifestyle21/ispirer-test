import React, {PropsWithChildren} from 'react';

interface IButton extends PropsWithChildren{
    className?: string
    onClick?: () => void
}

const Button = ({ children, className, onClick }: IButton) => {
    return (
        <button
            className={`pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-solid rounded-lg border-2 border-primary 
            hover:bg-primary hover:text-white ${className ? className : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;