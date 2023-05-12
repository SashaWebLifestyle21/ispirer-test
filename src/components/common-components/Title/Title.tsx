import React, {PropsWithChildren} from 'react';

interface ITitle extends PropsWithChildren{
    className?: string
}

const Title = ({ className, children }: ITitle) => {
    return (
        <h2 className={`text-[36px] text-center m-auto text-primary font-semiBold ${className ? className : ''}`}>
            {children}
        </h2>
    );
};

export default Title;