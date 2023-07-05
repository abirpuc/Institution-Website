import React, { useState } from 'react';
import topnavcss from './topnav.module.css'
import { Link } from 'react-router-dom';
const TopNav = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <div>
            <nav className={topnavcss.top_nav}>
                <Link></Link>
                <ul>
                   <li onClick={handleToggle}><Link className={toggle? topnavcss.active :''}to="/">Bangli</Link></li>
                   <li onClick={handleToggle}><Link className={toggle? ' ' : topnavcss.active} to="/">English</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;