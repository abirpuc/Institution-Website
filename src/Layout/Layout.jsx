import React from 'react';
import TopBanner from '../SharedComponent/topBanner/TopBanner';
import { Outlet } from 'react-router-dom';
import './layout.css'
import NavBar from '../SharedComponent/NavBar/NavBar';
const Layout = () => {
    return (
        <>
            <TopBanner/>
            <NavBar/>
            <div className="home-layout">
                <div className='outlet'>
                    <Outlet></Outlet>
                </div>
                <div className='side-nav'>
                    <h1>side content</h1>
                </div>
            </div>
            <h1>footer</h1>
        </>
    );
};

export default Layout;