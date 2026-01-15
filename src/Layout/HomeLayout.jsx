import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header className='h-96 bg-amber-200'>
                <Navbar></Navbar>
            </header>

            <main></main>
        </div>
    );
};

export default HomeLayout;