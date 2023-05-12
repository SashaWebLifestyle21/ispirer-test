import React from 'react';
import Title from "../../components/common-components/Title/Title";

const Header = () => {
    return (
        <header className='bg-primary p-[15px] mb-[20px]'>
            <Title className='text-white'>News</Title>
        </header>
    );
};

export default Header;