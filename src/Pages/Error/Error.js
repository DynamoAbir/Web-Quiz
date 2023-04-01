import React from 'react';
import Nav from '../../Component/Nav/Nav';

const Error = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='bg-gray-400 text-white min-h-screen flex items-center justify-center'>
                <h2 className="bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
                >Oops... Error: 404 Page not found!
                    <span className="sm:block"> You have entered in a wrong Route. </span>
                </h2>
            </div>
        </div>
    );
};

export default Error;