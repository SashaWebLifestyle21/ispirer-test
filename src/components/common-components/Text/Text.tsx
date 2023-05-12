import React, {PropsWithChildren} from 'react';

interface IText extends PropsWithChildren{
    className?: string
}

const Text = ({ className, children }: IText) => {
    return (
        <p className={`text-[24px] text-center m-auto text-primary font-semiBold ${className ? className : ''}`}>
            {children}
        </p>
    );
};

export default Text;