import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Nav from '../Component/Nav/Nav';

const Root = () => {
    return (
        <>

            <Nav></Nav>,
            <Outlet></Outlet>,
            <Footer></Footer>
        </>
    );
};

export default Root;