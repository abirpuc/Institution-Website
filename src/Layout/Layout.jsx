import React from 'react';
import TopBanner from '../SharedComponent/topBanner/TopBanner';
import { Outlet } from 'react-router-dom';
import './layout.css'
import NavBar from '../SharedComponent/NavBar/NavBar';
import SideNav from '../SharedComponent/SideNav/SideNav';
import bottomImg from '../assets/bottomImg.png'
import Footer from '../SharedComponent/Footer/Footer';
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
                   <SideNav/>
                </div>
            </div>
            <div className='bottomImg'>
                <img src={bottomImg} alt="" />
            </div>
            <Footer/>
        </>
    );
};

export default Layout;