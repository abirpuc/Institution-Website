import React from 'react';
import './importantlink.css';
import Button from '../../SharedComponent/Button/Button';
import {links} from '../../Data/Importantlink'
import { Link } from 'react-router-dom';
const ImportantLink = () => {
    console.log(links)
    return (
        <div className='important-link-container'>
            <Button name="গুরুত্বপূর্ণ লিঙ্ক"/>
            <div className='important-link'>
               { links.map((item,idx) => <Link key={idx} ><i className="fa-sharp fa-solid fa-circle-arrow-right"></i>{item.name}</Link>)}
            </div>
        </div>
    );
};

export default ImportantLink;