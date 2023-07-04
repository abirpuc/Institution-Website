import React, { useState } from 'react';
import './topnav.css';
import { Link } from 'react-router-dom';
import TopHero from '../TopHero/TopHero';
const TopNav = () => {
    const [translate, setTranslate] = useState(false);
    const hadleTranslate = (translate) => {
        setTranslate(translate)
    }
    console.log(translate)
    return (
        <>
        <nav className='top-nav'>
            <Link className={translate?'':'active'}to="" onClick={()=>hadleTranslate(false)}>Bangali</Link>
            <Link className={translate?'active':'' }to="" onClick={()=>hadleTranslate(!translate)}>English</Link>
            
        </nav>
        <TopHero/>
        </>
    );
};

export default TopNav;