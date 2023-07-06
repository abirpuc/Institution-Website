import React, { useState } from 'react';
import topnavcss from './topnav.module.css'
import { Link } from 'react-router-dom';
const TopNav = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = (toggle)=>{
        setToggle(toggle)
    }
    return (
        <div>
            <nav className={topnavcss.top_nav}>
                <Link></Link>
                <ul>
                   <li onClick={()=>handleToggle(true)}><Link className={toggle? topnavcss.active :''}to="/">Bangli</Link></li>
                   <li onClick={()=>handleToggle(false)}><Link className={toggle? ' ' : topnavcss.active} to="/">English</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;